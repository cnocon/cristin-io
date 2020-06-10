import React from "react"
import PageHeader from "../PageHeader"
import Layout from "../Layout/Layout"
import SEO from "../seo"
import PostPreview from "../Post/PostPreview"

const Category = ({ ...data}) => {
  const categoryName = data.pageContext.category
  const breadcrumbs = data.pageContext.breadcrumbs
  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug}/>
  });

  return (
    <Layout classNames="blog-posts readable-content">
      <SEO title={`${categoryName} | Front End Development`} />
      <section>
        <PageHeader pageHeader={`Tags: ${categoryName}`} breadcrumbs={breadcrumbs} />
        {posts}
      </section>
    </Layout>
  )
}

export default Category
