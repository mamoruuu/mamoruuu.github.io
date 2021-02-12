module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Alexander Bolotskov's blog (kinda)`,
    description: `I love JS, pizza and anime profile pictures`,
    author: `@mamorukuuun`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/templates/single-post.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              withAvif: true,
              quality: 80,
              markdownCaptions: true,
              maxWidth: 720,
              disableBgImageOnAlpha: true,
            }
          }
        ]
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mamoru blog`,
        short_name: `mamorublog`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#9FBEFE`,
        display: `minimal-ui`,
        icon: `./src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
