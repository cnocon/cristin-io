import React, { useEffect } from "react"
import Layout from "../Layout/Layout"
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import $ from 'jquery'
import { graphql } from "gatsby"

const PostsList = ({ data, pageContext }) => {
  const {category, nextPagePath, prevPagePath, breadcrumbs, title, seoDescription} = pageContext
  const posts = data.posts.nodes;
  const categories = Object.values(data.categories.nodes.map(node => node.categories).flat().reduce((acc, node) => {
    if (!acc[node.slug]) {
      acc[node.slug] = { name: node.name, slug: node.slug };
    }
    return acc;
  }, {}));

  const articles = posts.map(post => {
    return (
      <PostPreview post={post} key={post.slug} />
    )
  });

  const prevBtn = (
     <div className="col-sm-6 nav-prev left-block">
       {prevPagePath ? (
         <>
          <h4>NEWER POSTS</h4>
          <Styled.Button href={prevPagePath}>
            <i className="fal fa-long-arrow-left"></i>{` `}BACK
          </Styled.Button>
        </>
        )
      : null}
      </div>
    )

  const nextBtn = (
    <div className="col-sm-6 nav-next right-block">
    {nextPagePath ? (
      <>
        <h4>OLDER POSTS</h4>
        <Styled.Button href={nextPagePath}>
          CONTINUE{` `}<i className="fal fa-long-arrow-right"></i>
        </Styled.Button>
      </>
      ) : null}
    </div>
  )

  useEffect(() => {
    $('body').fadeIn(400);
  }, [])

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO stitle={`Latest Posts from ${category.toUpperCase()}| Front End Development Blog`} sdescription={seoDescription} />
      <div className="posts-list">
        <Rule title={title} icon="fas fa-rss" />
        <Breadcrumbs crumbs={breadcrumbs} />
        <div className="row">
          <div className="col-sm-12 col-md-9">
            {articles}
            <Styled.Navigation>
              {prevBtn}
              {nextBtn}
            </Styled.Navigation>
          </div>
          <BlogSidebar categories={categories} colClasses='col-sm-12 col-md-3' />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($category: String, $skip: Int) {
    posts: allButterPost(sort: {fields: published, order: DESC}, skip: $skip, limit: 3, filter: {categories: {elemMatch: {slug: {eq: $category}}}}) {
      nodes {
        categories {
          name
          slug
        }
        id
        published(locale: "en-US")
        slug
        summary
        title
      }
    }
    categories: allButterPost {
      nodes {
        categories {
          name
          slug
        }
      }
    }
  }
`;

export default PostsList
