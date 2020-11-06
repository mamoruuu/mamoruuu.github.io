import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header, PostContainer, UnderTitle, Title1 } from "../components/post-styles"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostContent } from "../components/post-content"

interface Props {
  data: any
}

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

const ArrowIcon = styled.img`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1;
  margin: 0;
  margin-right: 10px;
  vertical-align: middle;
`

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { mdx: { frontmatter, body, timeToRead } } = data
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PostContainer>
        <Links>
          <Link to="/#content">
            <ArrowIcon src={require('../images/icons/left-arrow.svg')} alt=""/>
            Back to blog
          </Link>
        </Links>
        <article>
          <Header>
            <Title1>{frontmatter.title}</Title1>
            <UnderTitle>Published at {frontmatter.date} | {timeToRead} min of reading</UnderTitle>
          </Header>
          <PostContent>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContent>
        </article>
      </PostContainer>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`