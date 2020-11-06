module.exports = {
  siteMetadata: {
    title: `Alexander Bolotskov's blog (not really)`,
    description: `I love JS, pizza and anime profile pictures`,
    author: `@mamorukuuun`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mamoru blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EA80FC`,
        theme_color: `#EA80FC`,
        display: `minimal-ui`,
        icon: `https://github.com/mamoruuu.png?size=64`, // This path is relative to the root of the site.
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
