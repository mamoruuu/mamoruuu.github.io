import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import { PostContainer } from "../components/post-styles"
import Post from "../templates/post"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}: any) => {
  const PostList = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => (<Post key={edge.node.id} post={edge.node} />))
  return (
    <Layout canShowCallingCard={true}>
      <SEO title="Home" />
      <PostContainer>
        {PostList}
      </PostContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
          timeToRead
        }
      }
    }
  }
`