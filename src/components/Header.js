import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import cx from "classnames"

import Navbar from "./Navbar"
import { title, header, content, phone, logoImage } from "../styles/header.module.css"
import { pageSectionWrapper } from "../styles/page.module.css"

const Header = ({ siteTitle, contactPhone }) => {
  const data = useStaticQuery(graphql`
    query LogoImage {
      file(relativePath: {eq: "wholesale-logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <header
    className={header}
  >
    <div
      className={cx(content, pageSectionWrapper)}
    >
      <Img className={logoImage} fluid={data?.file?.childImageSharp?.fluid}/>
      <h1>
        <Link
          to="/"
          className={title}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
      <h3 className={phone}>
        {contactPhone}
      </h3>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
  contactPhone: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  contactPhone: ``,
}

export default Header
