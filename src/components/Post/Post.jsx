import React, { useEffect } from "react"
import Layout from "../Layout/Layout"
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import ReactHtmlParser from 'react-html-parser'
import * as Styled from "./Post.styles"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import EntryMeta from "../EntryMeta/EntryMeta"
import $ from 'jquery'
import { Link } from 'gatsby'

const Post = ({...data}) => {
  const { post, breadcrumbs, categoriesMap, prevPost, nextPost, categories } = data.pageContext

  const prevBtn = prevPost ?
     <div className={nextPost ? "left-block" : "left-full-block"}>
        <Link to={`/articles/${prevPost.slug}`}>
        <i className="fal fa-long-arrow-left"></i>{` `}{prevPost.title}
        </Link>
      </div>
    : null

  const nextBtn = nextPost ?
      <div className={prevPost ? "right-block" : "right-full-block"}>
        <Link to={`/articles/${nextPost.slug}`}>
          {nextPost.title}&nbsp;<i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    : null
  
  const loadAddThis = () => {
    const isReady = (
      window && 
      window.addthis && 
      window.addthis.layers &&
      window.addthis.layers.hasOwnProperty('refresh')
    )
    
    if (isReady) {
      // Load the plugin on the page
      window.addthis.layers.refresh()
    }
  }
   
  useEffect(() => {
    $('html, body').animate({ scrollTop: 0 }, 0)
    loadAddThis();
  }, [])
  
  return (
    <Layout>
      <Header />

      <SEO stitle={post.title} sdescription={post.summary} slug={post.slug}>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ed26ab486ccf280"></script>
        <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
      </SEO>


      <Rule
          title={`Level: ${post.tags[0].name.toUpperCase()}`}
          icon="fas fa-chart-bar"
        />
        <div className="row">
          <div className="col-sm-12">
            <Breadcrumbs crumbs={breadcrumbs} />
              <header css={Styled.HeaderStyles}>
                <Styled.PostTitle>
                  {post.title}
                </Styled.PostTitle>

                <div className="addthis_inline_share_toolbox_vo2p" 
                  css={ theme => ({ marginBottom: theme.spacing.default, textAlign: 'center' }) }>
                </div>

                <EntryMeta
                  categoriesMap={categoriesMap}
                  published={post.published}
                  categories={post.categories}
                  classes='' />
              </header>
          </div>
          
          <div className="col-sm-12 col-md-9">
            <section css={theme => ({paddingTop: 0, paddingBottom: theme.spacing.lg})}>

                <div className="entry-content clearfix" css={Styled.EntryContent}>
                  <div className="main-content">
                    { ReactHtmlParser(post.body) }
                  </div>
                </div>
              
            </section>

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
          </div>
          <BlogSidebar categories={categories} colClasses='col-sm-12 col-md-3' />
        </div>
        {/* <div className="row">
          <div className="col-sm-12">
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
          </div>
        </div> */}
    </Layout>
  )
}

export default Post;
