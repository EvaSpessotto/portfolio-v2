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
      <div className="project-container">
        <Fade>
          {/* <HeroPost title={post.frontmatter.title.toLowerCase()} /> */}
          <Image fluid={post.frontmatter.banner.childImageSharp.fluid} />
        </Fade>

        <Fade>
          <Container>
            <Row>
              <Col>
                <div className="project-presentation-container">
                  <h1 className="mt-5 project-header">
                    {capitalize(post.frontmatter.title)}
                  </h1>
                  <p className="project-description">
                    {post.frontmatter.description}
                  </p>
                </div>
                <Image
                  fluid={post.frontmatter.devices.childImageSharp.fluid}
                  alt=""
                  className="w-100"
                />
              </Col>
            </Row>
          </Container>
        </Fade>

        <Fade>
          {post.frontmatter.listImages.map((item, index) => {
            return (
              <Container
                fluid
                className={`container-${item.bgColor} p-5`}
                key={index}
              >
                <Row>
                  <Col>
                    <Container className="py-5">
                      <h2 className="project-title">{item.title}</h2>
                      <div className="line mb-5" />
                      {/* <p>{item.description && item.description}</p> */}
                      <Image
                        fluid={item.image.childImageSharp.fluid}
                        alt={item.title}
                        className="w-100"
                        className="test mb-5"
                      />
                    </Container>
                  </Col>
                </Row>
              </Container>
            )
          })}
        </Fade>
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
        devices {
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
