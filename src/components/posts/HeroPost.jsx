import React from "react"
import { Parallax } from "react-parallax"
import { bannerWildhub } from "../../../static/images/banners/banners.js"

const HeroPost = () => {
  return (
    <Parallax bgImage={bannerWildhub} bgImageAlt="the cat" strength={500}>
      <div style={{ height: "600px" }} />
    </Parallax>
  )
}

export default HeroPost
