import React from "react"
import { Container, Row, Col } from "reactstrap"
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
      <HeroPost banner={post.frontmatter.banner} />

      <Container>
        <Row>
          <Col>
            <h1 className="mt-5">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
          </Col>
        </Row>
      </Container>

      {post.frontmatter.listImages.map(image => {
        return (
          <Container fluid>
            <Row>
              <Col>
                <h2>{image.title}</h2>
                <div className="line" />
                <img
                  src={image.image}
                  style={{ maxWidth: "100%", maxHeight: "500px" }}
                />
              </Col>
            </Row>
          </Container>
        )
      })}
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
        thumbnail
        banner
        title
        description
        listImages {
          image
          title
          text
          isColoured
        }
      }
    }
  }
`
