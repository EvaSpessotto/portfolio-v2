import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />
    <div style={{ flex: "1" }}>{children}</div>
    <Footer />
  </div>
)
