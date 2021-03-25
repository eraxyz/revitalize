import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const Hero = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "chandler.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  
  return (
    <BackgroundImage
      fluid={imageData}
      alt="Chandler skyline"
    >
      {children}
    </BackgroundImage>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
