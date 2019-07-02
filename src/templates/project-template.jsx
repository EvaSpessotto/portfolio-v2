import React from "react"
import "./projectTemplate.scss"
import { Container, Row, Col } from "reactstrap"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import capitalize from "lodash/capitalize"
import Fade from "react-reveal/Fade"

import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout"
import HeroPost from "../components/posts/HeroPost"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt || "nothing here"}
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
        pathname={post.fields.slug}
        article
      />
      <div className="project-container mb-5">
        <Fade>
          <Image fluid={post.frontmatter.banner.childImageSharp.fluid} />
        </Fade>

        <Fade>
          <Container className="header-container">
            <Row>
              <Col className="col-4">
                <h1 className="project-title">{post.frontmatter.title}</h1>
                <div>
                  <ul>
                    <li>Graphiste</li>
                    <li>Illustratrice</li>
                    <li>Développeuse web</li>
                  </ul>
                </div>
              </Col>
              <Col className="col-8">
                <p className="project-description">
                  {post.frontmatter.description}
                </p>
              </Col>
            </Row>
          </Container>
        </Fade>

        {post.frontmatter.listImages.map((item, index) => {
          return (
            <Container
              fluid
              className={`container--${item.bgColor} p-5 mt-5 mb-3`}
              key={index}
            >
              <Row>
                <Col>
                  <Container>
                    <Fade>
                      <h2 className="project-heading">{item.title}</h2>
                      <div className="line" />
                    </Fade>
                    <Fade>
                      <Image
                        fluid={item.image.childImageSharp.fluid}
                        alt={item.title}
                        className="w-100"
                      />
                    </Fade>
                  </Container>
                </Col>
              </Row>
            </Container>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        listImages {
          image {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          bgColor
        }
      }
    }
  }
`
