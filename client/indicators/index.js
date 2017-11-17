import React, { Component } from 'react'

export default function Indicators(props) {
  switch (props.currentSlide) {
    case 1:
      return (
        <div className="indicator">
          <div className="structure active" id="indicator-one" />
          <div className="structure" id="indicator-two" />
          <div className="structure" id="indicator-three" />
        </div>
      )
      break
    case 2:
      return (
        <div className="indicator">
          <div className="structure" id="indicator-one" />
          <div className="structure active" id="indicator-two" />
          <div className="structure" id="indicator-three" />
        </div>
      )
      break
    case 3:
      return (
        <div className="indicator">
          <div className="structure" id="indicator-one" />
          <div className="structure" id="indicator-two" />
          <div className="structure  active" id="indicator-three" />
        </div>
      )
      break
  }
}
