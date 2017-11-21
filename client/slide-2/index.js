import React, { Component } from 'react'

let background = {
  backgroundImage:
    'url(https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?h=350&auto=compress&cs=tinysrgb)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export default class SlideTwo extends Component {
  render() {
    return <div style={background} className="img" />
  }
}
