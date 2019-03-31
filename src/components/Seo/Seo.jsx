import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

const Seo = ({ title, description, image, pathname, article }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || "/"}`,
        }

        return (
          <>
            <Helmet title={seo.title}>
              <html lang="fr" />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossorigin="anonymous"
              />
            </Helmet>
            <Facebook
              desc={seo.description}
              image={seo.image}
              title={seo.title}
              type={article ? "article" : "website"}
              url={seo.url}
            />
            <Twitter
              title={seo.title}
              image={seo.image}
              desc={seo.description}
              username={twitterUsername}
            />
          </>
        )
      }}
    />
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
