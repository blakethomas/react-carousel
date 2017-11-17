import React, { Component } from 'react'

let background = {
  backgroundImage:
    'url(https://images.pexels.com/photos/299113/pexels-photo-299113.jpeg?h=350&auto=compress&cs=tinysrgb)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export default class SlideOne extends Component {
  render() {
    return <div style={background} className="img" />
  }
}
