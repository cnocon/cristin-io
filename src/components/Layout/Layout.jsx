/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import "../layout.css"
import * as Styled from "./Layout.styles"

const Layout = ({ children, classNames }) => {
  return (
    <>
      <Header />
      <Styled.Container className="wrapper">
        <main className={classNames}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styled.Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
