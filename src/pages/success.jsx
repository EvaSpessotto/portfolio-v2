import React from "react"
import "./success.scss"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/Layout"

const success = () => {
  return (
    <Layout>
      {/* <Container className="animated-squares">
        
      </Container> */}
      <Container className="text-center success-page">
        <Row className="animated-squares d-flex justify-content-center">
          <Col lg="1" xs="1" className="m-0">
            <div className="black m-0" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div>
              <h1>Merci pour votre message !</h1>
              <p>
                Je vous répondrais dans les plus brefs délais <span> 🙂 </span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Link to="/">
              <button className="black-btn">Retourner à l'accueil ?</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default success
