import React, { Component } from 'React'

export default class Image extends Component {
  render() {
    return <img className="img" src={this.props.image} />
  }
}
