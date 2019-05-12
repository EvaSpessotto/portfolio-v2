import React from "react"
import { Parallax } from "react-parallax"

const HeroPost = ({ banner }) => {
  return (
    <Parallax bgImage={banner} bgImageAlt="the cat" strength={500}>
      <div style={{ height: "600px" }} />
    </Parallax>
  )
}

export default HeroPost
