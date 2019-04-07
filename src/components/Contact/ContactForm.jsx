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
          {/* <form>
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
          </form> */}

          <Form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />

            <FormGroup className="name blue-line mt-4">
              <Label for="name">nom</Label>
              <Input
                type="text"
                name="name"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="red-line">
              <Label for="email">email</Label>
              <Input
                type="email"
                name="email"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="yellow-line">
              <Label for="subject">sujet ?</Label>
              <Input
                type="text"
                name="subject"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>

            <FormGroup className="blue-line">
              <Label for="message">message</Label>
              <Input
                type="textarea"
                name="message"
                rows="8"
                className="border-top-0 border-right-0 border-left-0 rounded-0 p-0"
              />
            </FormGroup>
            <button className="submit-btn mt-5" type="submit">
              Envoyer
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactForm
