import * as React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.scss"
import socialLinks from "../socialLinks"

export default class Footer extends React.Component {
  render() {
    return (
      <Container id="footer" fluid>
        <Row className="d-flex justify-content-center">
          <Col lg="4">
            <div className="line" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-3">
            {socialLinks.map((link, key) => {
              return (
                <a
                  href={link.link}
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={`${link.class} mx-3`}>{link.name}</span>
                </a>
              )
            })}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="small-text">
              {`Tous droits réservés © ${new Date().getFullYear()}`} | Fait avec{" "}
              <i className="fa fa-heart" /> par Eva Spessotto
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}
