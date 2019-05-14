import React from "react"
import "./projectTemplate.scss"
import { Container, Row, Col } from "reactstrap"
import Image from "gatsby-image"
import { graphql } from "gatsby"

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
        image={post.frontmatter.thumbnail}
        pathname={post.fields.slug}
        article
      />
      <div className="project-container">
        <HeroPost {...post.frontmatter.title} />
        <Container>
          <Row>
            <Col>
              <h1 className="mt-5 project-header">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.description}</p>
              <Image
                fluid={post.frontmatter.devices.childImageSharp.fluid}
                alt=""
                className="w-100"
              />
            </Col>
          </Row>
        </Container>

        {post.frontmatter.listImages.map(item => {
          return (
            <Container fluid className={`container-${item.bgColor} p-5`}>
              <Row>
                <Col>
                  <Container>
                    <h2 className="project-title"> {item.title}</h2>
                    <p>{item.description}</p>
                    <Image
                      fluid={item.image.childImageSharp.fluid}
                      alt={item.title}
                      className="w-100"
                    />
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
          description
          bgColor
        }
      }
    }
  }
`
