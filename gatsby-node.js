/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/${node.frontmatter.slug}`,
      component: path.resolve(`src/templates/single-post.tsx`),
    })
  })
}