import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        timelapse: allFile(filter: { sourceInstanceName: { eq: "timelapse" } }) {
          edges {
            node {
              extension
              dir
              modifiedTime
              childImageSharp {
                fixed(width: 640, height: 360) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => data.timelapse.edges.map(({ node }) =>
      <Img fixed={node.childImageSharp.fixed} />
    )}
  />
)
export default Image
