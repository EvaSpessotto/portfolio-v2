import React from "react"
import { Container } from "reactstrap"
import { graphql } from "gatsby"
import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout"

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
      <Container text style={{ marginTop: "5%", marginBottom: "5%" }}>
        <h1>{post.frontmatter.title}</h1>
      </Container>
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
        description
        thumbnail
        cover
        banner
        devices
        images {
          image1
          image2
          image3
        }
      }
    }
  }
`
