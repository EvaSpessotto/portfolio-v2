import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Row, Col } from "reactstrap"

const homepage = () => {
  return (
    <Container id="home-pres">
      <Row>
        <Col lg="8" sm="8" xs="12">
          <h1 id="home-message">
            Bonjour, je suis Eva ; développeuse web junior & graphiste
          </h1>
          <div className="line mt-3" />
          <Container className="animated-squares">
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
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default homepage
