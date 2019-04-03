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
    `gatsby-plugin-netlify-cms`,
  ],
}
