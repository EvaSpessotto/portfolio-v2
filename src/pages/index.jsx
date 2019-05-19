import React from "react"
import "./index.scss"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import Fade from "react-reveal/Fade"

import Layout from "../components/Layout"
import Seo from "../components/Seo/Seo"

const homepage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo />
      <Container className="home">
        <Row>
          <Col lg="8" sm="8" xs="12">
            <Fade left>
              <h1 className="home-message">
                Bonjour, je suis Eva ; développeuse web junior & graphiste
              </h1>
              <div className="line mt-3" />
            </Fade>
            <Container className="animated-squares">
              <Fade bottom>
                <Row>
                  <Col lg="3" xs="3" className="m-0">
                    <div className="black m-0" />
                  </Col>
                  <Col lg="3" xs="3" className="m-0">
                    <div className="blue m-0" />
                  </Col>
                  <Col lg="3" xs="3" className="m-0">
                    <div className="yellow" />
                  </Col>
                  <Col lg="3" xs="3" className="m-0">
                    <div className="red" />
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="projects-list">
        <Row>
          {projects &&
            projects.map((project, index) => {
              return (
                <Col
                  lg="4"
                  md="6"
                  sm="12"
                  key={index}
                  className="justify-content-center"
                >
                  <Link to={project.node.fields.slug}>
                    <Fade cascade>
                      <Image
                        fluid={
                          project.node.frontmatter.thumbnail.childImageSharp
                            .fluid
                        }
                        className="mb-5 img-fluid rounded-circle"
                        alt=""
                      />
                    </Fade>
                  </Link>
                </Col>
              )
            })}
        </Row>
      </Container>
    </Layout>
  )
}

export default homepage

export const homePageQuery = graphql`
  query thumbnailProjects {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
