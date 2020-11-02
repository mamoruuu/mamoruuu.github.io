import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

interface Props {
  data: any
}

const Header = styled.header`
  display: block;
  margin-bottom: 30px;
`

const Article = styled.article`
  max-width: 520px;
  width: 100%;
  display: block;
  position: relative;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-style: normal;
  line-height: 38px;
  text-align: left;
`

const PublishDate = styled.div`
  font-size: 11px;
  line-height: 13px;
`

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter: post, html } = markdownRemark
  const publishDate = post.date
  return (
    <Layout>
      <SEO title={post.title} />
      <Article>
        <Header>
          <Title>{post.title}</Title>
          <PublishDate>Published at {publishDate}</PublishDate>
        </Header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Article>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`