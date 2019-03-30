import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
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

library.add(faHeart)
