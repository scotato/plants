import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import moment from 'moment'
import Img from 'gatsby-image'

const Controls = styled.div`
  display: grid;
  position: fixed;
  padding: 16px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 16px;
  width: 100%;
  bottom: 0;
  place-items: center;
`

const Control = styled.div`
  padding: 16px 32px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 64px;
  line-height: 1;
  width: 100%;
  height: 52px;
`

const Slider = styled.input.attrs({
  type: 'range'
})`
  width: 100%;
`

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const Timelapse = props => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timelapse = props.images
  const isLast = activeImageIndex === timelapse.length - 1
  const image = timelapse[activeImageIndex].node
  const date = new Date().setTime(image.name)

  useEffect(() => {
    const timer = setInterval(() => {
      playing && !isLast && setActiveImageIndex(activeImageIndex + 1)
      isLast && setPlaying(false)
    }, 500)
    return () => clearInterval(timer)
  })

  return (
    <>
      <Img fixed={image.childImageSharp.fixed} />
      <Controls>
        <Control>
          {moment(date).format('hh:mm ddd MMM D, Y')}
        </Control>
        <Control>
          <Slider
            min={0}
            max={timelapse.length - 1}
            value={activeImageIndex}
            onChange={e => setActiveImageIndex(Number(e.target.value))}
          />
        </Control>
        <Control>
          <Button onClick={() => setPlaying(!playing)}>
            {playing ? 'Pause' : 'Play'}
          </Button>
        </Control>
      </Controls>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        timelapse: allFile(
          filter: { sourceInstanceName: { eq: "timelapse" } }
          sort: {
            fields: [name]
            order: ASC
          }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width: 1280, height: 960) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Timelapse images={data.timelapse.edges} />}
  />
)
