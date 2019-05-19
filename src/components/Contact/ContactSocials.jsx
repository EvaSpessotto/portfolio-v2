import React from "react"
import { Container, Row, Col } from "reactstrap"
import socialLinks from "../../socialLinks"
import Fade from "react-reveal/Fade"

const ContactSocials = () => {
  return (
    <Container id="contact-links">
      <Fade left>
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
      </Fade>
    </Container>
  )
}

export default ContactSocials
