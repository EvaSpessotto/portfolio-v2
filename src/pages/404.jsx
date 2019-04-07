import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/Layout"

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <Container className="text-center">
          <Row>
            <Col>
              <h1>404</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default NotFound
