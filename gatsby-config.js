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
          },
          {
            resolve: `gatsby-remark-admonitions`,
            options: {
              customTypes: {
                custom: {
                  keyword: "test",
                  emoji: '💻',
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
                },
              },
              tag: ":::",
              icons: "emoji",
            }
          },
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
