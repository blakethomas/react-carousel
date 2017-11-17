import React from 'react'
import { render } from 'react-dom'
import Image from './image'
import Rightarrow from './right-arrow'
import Leftarrow from './left-arrow'
import SlideOne from './slide-1'
import SlideTwo from './slide-2'
import SlideThree from './slide-3'
import Indicators from './indicators'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { slideCount: 1 }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide() {
    if (this.state.slideCount < 3) {
      this.setState({ slideCount: this.state.slideCount + 1 })
    } else {
      this.setState({ slideCount: 1 })
    }
  }

  previousSlide() {
    if (this.state.slideCount != 1) {
      this.setState({ slideCount: this.state.slideCount - 1 })
    } else {
      this.setState({ slideCount: 3 })
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="images">
          {this.state.slideCount === 1 ? <SlideOne /> : null}
          {this.state.slideCount === 2 ? <SlideTwo /> : null}
          {this.state.slideCount === 3 ? <SlideThree /> : null}

          <Rightarrow nextSlide={this.nextSlide} />
          <Leftarrow previousSlide={this.previousSlide} />
          <Indicators currentSlide={this.state.slideCount} />
        </div>
      </div>
    )
  }
}

render(<Carousel />, document.querySelector('#root'))
