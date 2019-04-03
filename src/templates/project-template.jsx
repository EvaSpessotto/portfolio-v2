import React from "react"
import "./blog-post.scss"
import { Container, Header } from "semantic-ui-react"
import { graphql } from "gatsby"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"

export default function Template({ data }) {
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
        <Header as="h1">{post.frontmatter.title}</Header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query projectBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         description
//         thumbnail
//         cover
//         banner
//         devices
//         images {
//           image1
//           image2
//           image3
//         }
//       }
//     }
//   }
// `
