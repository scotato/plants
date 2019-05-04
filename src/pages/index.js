import React from "react"

import Timelapse from "../components/Timelapse"
import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`plants`]} />
    <Timelapse />
  </>
)

export default IndexPage
