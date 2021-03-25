import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Row from "./Row"
import Section from "./Section"
import { layout, footer } from "../styles/layout.module.css"
import { pageSectionWrapper } from "../styles/page.module.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          copyright,
          contactPhone,
          contactEmail,
        }
      }
    }
  `)

  const { 
    title,
    copyright,
    contactPhone,
    contactEmail
  } = data.site.siteMetadata

  return (
    <>
      <Header siteTitle={title} contactPhone={contactPhone}/>
      <div
        className={layout}
      >
        <main>{children}</main>
        <footer
          className={footer}
        >
          <Section backgroundColor="black" color="var(--color-accent-500)">
            <Row className={pageSectionWrapper}>
              <div>
                <p>
                  Contact Us
                </p>
                <p>
                  {contactPhone}
                </p>
                <p>
                  {contactEmail}
                </p>
              </div>
              <div>
                <p>
                  Social Media Links
                </p>
              </div>
            </Row>
            {copyright}
          </Section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
