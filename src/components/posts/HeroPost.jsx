import React from "react"
import { Parallax } from "react-parallax"
import { bannerWildhub } from "../../../static/images/banners/banners.js"

const HeroPost = ({ title }) => {
  console.log(title)
  const banner = require(`../../../static/images/banner-${title}.jpg`)
  return (
    <Parallax bgImage={banner} bgImageAlt="the cat" strength={500}>
      <div style={{ height: "600px" }} />
    </Parallax>
  )
}

export default HeroPost
