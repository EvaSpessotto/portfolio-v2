import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import "./contact.scss"
import socialLinks from "../socialLinks"
import Fade from "react-reveal/Fade"

import Layout from "../components/Layout"
import Seo from "../components/Seo/Seo"
import ContactForm from "../components/Contact/ContactForm"
import ContactSocials from "../components/Contact/ContactSocials"

class contact extends Component {
  render() {
    return (
      <Layout>
        <Seo pathname="/contact" />
        <ContactSocials />
        <ContactForm />
      </Layout>
    )
  }
}

export default contact
