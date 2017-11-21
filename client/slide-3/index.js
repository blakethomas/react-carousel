import React, { Component } from 'react'

let background = {
  backgroundImage:
    'url(https://images.pexels.com/photos/304862/pexels-photo-304862.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export default class SlideThree extends Component {
  render() {
    return <div style={background} className="img" />
  }
}
