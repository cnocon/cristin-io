import React, { useEffect } from "react"
import { Link } from 'gatsby'
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import { ReadableContent } from '../PostPreview/PostPreview.styles'
import SEO from "../SEO/seo"
import ReactHtmlParser from 'react-html-parser'
import { window } from 'browser-monads';
import * as Styled from "./Post.styles"

const Post = ({...data}) => {
  const post = data.pageContext.post
  const breadcrumbs = data.pageContext.breadcrumbs
  const date = new Date(post.published).toLocaleString()
  const links = post.categories.map(c => {
    return <Link to={`/articles/${c.slug}-page-1`} key={c.slug}>{c.name}</Link>
  });

  const refreshAddThis = () => {
    window.addEventListener('load', () => {
      window.addthis.init();
      window.addthis.layers.refresh();
    })
  }

  useEffect(() => {
    if (window.addthis) {
      window.addthis.init();
      window.addthis.layers.refresh();
    }
    refreshAddThis();
  })

  return (
    <Layout maxWidth="90rem" width={`90%`}>
      <TopBar pageHeader={post.title} breadcrumbs={breadcrumbs} />
      <Header ruleTitle={`Level: ${post.tags[0].name.toUpperCase()}`} ruleIcon="icon-chart-bar"/>
      <SEO
        stitle={post.title}
        sdescription={post.summary}
        imagePath={post.featured_image}
        />

      <section style={{paddingBottom: `3rem`}}>
        <ReadableContent className="hentry post post-single">
          <header css={Styled.HeaderStyles}>
            <Styled.PostTitle className="title">{post.title}</Styled.PostTitle>
            <div className="addthis_inline_share_toolbox_vo2p" style={{marginBottom: '16px'}}></div>
            <div className="entry-meta">
              <span className="posted-in">posted in {links}</span>
              <span className="posted-on"> on&nbsp;<time className="entry-date" dateTime={post.published}>{date}</time></span>
            </div>
          </header>
          <div className="entry-content clearfix" style={{fontSize: `1.6rem`}}>
            {/* <div className="featured-image-wrapper" css={Styled.FeaturedImageContainer}> */}
              {/* <Styled.FeaturedImage src={post.featured_image} alt={post.featured_image_alt} /> */}
            {/* </div> */}
            <div className="main-content">
              {ReactHtmlParser(post.body)}
            </div>
          </div>
        </ReadableContent>
      </section>
    </Layout>
  )
}

export default Post;
