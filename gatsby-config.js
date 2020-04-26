module.exports = {
  siteMetadata: {
    title: `Javed Akhtar's Blog`,
    description: `Javed Akhtar's Blog`,
    siteUrl: `https://blog.javed.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {},
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.BLOG_JAVED_DEV_BUCKET_NAME,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
