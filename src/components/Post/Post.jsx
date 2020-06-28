import React, {useEffect} from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import { ReadableContent } from '../PostPreview/PostPreview.styles'
import SEO from "../SEO/seo"
import ReactHtmlParser from 'react-html-parser'
import * as Styled from "./Post.styles"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import EntryMeta from "../EntryMeta/EntryMeta"
import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions'
import $ from 'jquery'
import { Link } from 'gatsby'


const Post = ({...data}) => {
  const { post, breadcrumbs, categoriesMap, prevPost, nextPost } = data.pageContext

  const prevBtn = prevPost ?
     <div className={nextPost ? "left-block" : "left-full-block"}>
        <Link to={`/articles/${prevPost.slug}`}>
          <span style={{transform: "rotate(180deg) translateY(-5%)", display: 'inline-block'}}>→</span>{` `}{prevPost.title}
        </Link>
      </div>
    : null

  const nextBtn = nextPost ?
      <div className={prevPost ? "right-block" : "right-full-block"}>
        <Link to={`/articles/${nextPost.slug}`}>
          {nextPost.title}&nbsp;<span>→</span>
        </Link>
      </div>
    : null
   
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, 0);
    $('.addthis_inline_share_toolbox_vo2p').hide();
    setTimeout(() => {
      window.addthis.layers.refresh();
      $('.addthis_inline_share_toolbox_vo2p').fadeIn(800);
    }, 1200);
    
  }, [])

  return (
    <Layout>
      <Header />
      <SEO
        stitle={post.title}
        sdescription={post.summary}
        slug={post.slug}
      />

      <PageTransition>
        <section css={theme => ({paddingBottom: theme.spacing.lg})}>
          <Rule
            title={`Level: ${post.tags[0].name.toUpperCase()}`}
            icon="rule-icon icon-chart-bar"
          />
          <Breadcrumbs crumbs={breadcrumbs} />
          <ReadableContent className="hentry post post-single">
            <header css={Styled.HeaderStyles}>
              <Styled.PostTitle className="title">
                {post.title}
              </Styled.PostTitle>

              <div className="addthis_inline_share_toolbox_vo2p" style={{marginBottom: '1.6rem'}}></div>
              <EntryMeta
                categoriesMap={categoriesMap}
                published={post.published}
                categories={post.categories}
              />

            </header>

            <div className="entry-content clearfix" css={Styled.EntryContent}>
            {/* <img src={post.featured_image} style={{display: 'block', margin: '0 auto 1.6rem', height: '300px'}} alt=""/> */}
              <div className="main-content">
                {ReactHtmlParser(post.body)}
              </div>
            </div>
          </ReadableContent>
          
          <Styled.Navigation>
          <div className="col-sm-6 nav-previous left-block">
            {prevBtn ? <h4>PREVIOUS POST</h4> : null }
            {prevBtn}
          </div>
          <div className="col-sm-6 nav-next right-block">
            {nextBtn ? <h4>NEXT POST</h4> : null }
            {nextBtn}
          </div>
          </Styled.Navigation>
          
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Post;
