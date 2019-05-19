import React from "react"
import "./404.scss"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/Layout"
import Seo from "../components/Seo/Seo"

const NotFound = () => {
  return (
    <Layout>
      <Seo />
      <Container className="notfound-container d-flex justify-content-center ">
        <Row>
          <Col className="text-center">
            <h1>Erreur 404</h1>
            <p>Désolée, il semblerait que cette page n'existe pas...</p>
            <Link to="/">
              <button className="black-btn">Retourner à l'accueil ?</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFound
