import React, { Component } from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
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
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="text" name="name" placeholder="your name" />
              <button className="submit-btn mt-5" type="submit">
                Envoyer
              </button>
            </form>

            {/* <FormGroup className="name blue-line mt-4">
                <Input type="hidden" name="bot-field" />
                <Label for="name">nom</Label>
                
              </FormGroup> */}
            {/* 
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
              </FormGroup> */}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ContactForm
