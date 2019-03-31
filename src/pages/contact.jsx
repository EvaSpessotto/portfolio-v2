import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import "./contact.scss"
import socialLinks from "../socialLinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import Seo from "../components/Seo/Seo"
import ContactForm from "../components/Contact/ContactForm"

class contact extends Component {
  render() {
    return (
      <Layout>
        <Seo pathname="/contact" />
        <Container id="contact-links">
          <Row>
            <Col lg="6" className="offset-lg-3">
              <h2>Retrouvez-moi sur les réseaux...</h2>
              <div className="line" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="offset-lg-3">
              {socialLinks.map((socialLink, key) => {
                const { link, icon } = socialLink
                return (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={key}
                  >
                    <i className={`${icon} ${socialLink.class} fa-3x mr-3`} />
                  </a>
                )
              })}
            </Col>
          </Row>
        </Container>

        <ContactForm />
      </Layout>
    )
  }
}

export default contact
