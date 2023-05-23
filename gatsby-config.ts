import type { GatsbyConfig } from "gatsby";

import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
  // Important: remove this prefix if you are deploying to a root domain, e.g https://myblog.com
  // Otherwise rename to the path you're going to use, e.g https://myblog.com/notes.
  // See https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/.
  pathPrefix: `/tnr-blog-template`,

  siteMetadata: {
    title: `void. is. not. un. defined.`,
    siteUrl: `https://alexrintt.io/tnr-blog-template`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
