import React, { Component } from 'React'

export default function Leftarrow(props) {
  return (
    <i
      className="fa fa-chevron-left"
      aria-hidden="true"
      onClick={props.previousSlide}
    />
  )
}
