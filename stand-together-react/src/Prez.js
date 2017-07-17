import React from 'react'
import { connect } from 'react-redux'
import createTheme from 'spectacle/lib/themes/default'
import {
  Deck,
  Heading,
  Slide,
  Text
} from 'spectacle'

// Require CSS
// import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'

const darkGreen = '#506C64'
const darkBlue = '#011638'
const lightGreen = '#77CBB9'
const gray = '#CDD3D5'

const theme = createTheme({
  primary: darkGreen,
  secondary: gray,
  tertiary: lightGreen,
  quartenary: darkBlue
}, {
  primary: 'Bungee Shade',
  secondary: 'Bungee',
  tertiary: 'Bungee Hairline'
})

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    items: state.itemByTopic
  }
}

const Prez = (props) => {
  const slides = []
  const title = (
    <Slide transition={['zoom']} bgColor='primary'>
      <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
        Stand Up,
      </Heading>
      <Text margin='10px 0 0' textColor='quartenary' size={1} fit bold>
        together.
      </Text>
    </Slide>
  )
  slides.push(title)
  props.topics.forEach((topic) => {
    if (props.items[topic] && props.items[topic].length) {
      slides.push(
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='quartenary'>
            {topic}
          </Heading>
        </Slide>
      )
      props.items[topic].forEach((discussionItem) => {
        slides.push(
          <Slide transition={['fade']} bgColor='secondary'>
            <Heading size={5} textFont='tertiary' textColor='primary'>Topic: {topic}</Heading>
            <Heading size={5} textFont='tertiary' textColor='primary'>Submitted by: {discussionItem.name}</Heading>
            <Heading size={1} textFont='secondary' textColor='tertiary'>{discussionItem.title}</Heading>
            <Heading size={2} textFont='tertiary' textColor='quartenary'>{discussionItem.details}</Heading>
          </Slide>
        )
      })
    }
  })
  slides.push(
    <Slide transition={['spin']} bgColor='primary'>
      <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
        Clap!
      </Heading>
    </Slide>
  )
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} children={slides} />
  )
}

export default connect(
  mapStateToProps,
  null
)(Prez)
