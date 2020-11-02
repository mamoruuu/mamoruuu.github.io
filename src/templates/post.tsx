import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header, PostContainer, UnderTitle, Title1 } from "../components/post-styles"

interface Props {
  data: any
}

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter: post, html, timeToRead } = markdownRemark
  const publishDate = post.date
  return (
    <Layout>
      <SEO title={post.title} />
      <PostContainer>
        <article>
          <Header>
            <Title1>{post.title}</Title1>
            <UnderTitle>Published at {publishDate}. {timeToRead} min of reading</UnderTitle>
          </Header>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </PostContainer>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`