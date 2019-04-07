import React, { Component } from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"

const ContactForm = () => {
  return (
    <Container id="contact-form">
      <Row>
        <Col lg="6" className="offset-lg-3">
          <h2>...ou laissez-moi un message !</h2>
          <div className="line" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg="6" className="offset-lg-3">
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <div>
              <input type="submit" value="Send" />
              <input type="reset" value="Eraser" />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactForm
