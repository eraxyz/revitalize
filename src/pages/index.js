import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Block from "../components/Block"
import Section from "../components/Section"
import Row from "../components/Row"
import Hero from "../components/Hero"
import PrimaryForm from "../components/PrimaryForm"
import { heroTextBlock } from "../styles/home.module.css"
import { pageSectionWrapper } from "../styles/page.module.css"

const Home = ({ data }) => {
  const { html } = data?.allMarkdownRemark?.nodes[0]

  return (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <Row className={pageSectionWrapper}>
        <div className={heroTextBlock} dangerouslySetInnerHTML={{ __html: html }} />
        <Block variant="rounded" maxWidth="422px">
          <PrimaryForm />
        </Block>
      </Row>
    </Hero>
    {/* <Row className={pageSectionWrapper}>
      {/* {Replace with content from MD, creating a block for each} */}
      {/* <Block >
        <div>
          A block that has a lot of text explaining what we do and why we do it
        </div>
      </Block>
      <Block >
        <div>
          A block
        </div>
      </Block> */}
    {/* </Row> */}
    {/* <Section backgroundColor="var(--color-primary-500)" color="white">
      <div className={pageSectionWrapper}>
        A Section
      </div>
    </Section> */}

  </Layout>
)}

export const query = graphql`
  query HeroContent {
    allMarkdownRemark(filter: {frontmatter: {location: {eq: "hero"}}}) {
      nodes {
        html
      }
    }
  }

`

export default Home