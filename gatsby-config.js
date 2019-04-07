module.exports = {
  siteMetadata: {
    title: `Eva Spessotto - Portfolio`,
    description: `Developpeuse web et graphiste juniore`,
    url: `eva-spessotto.fr`,
    twitterUsername: "@evaspessotto",
    image: "./static/images/saint-cyp-06-test.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `assets`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eva Spessotto`,
        short_name: `Eva S`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
