import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Neverthless, Code`,
    siteUrl: `https://johnkim.github.io`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/contents/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-pages`,
        path: `${__dirname}/contents/pages/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
        ],
      },
    },
  ],
}

export default config
