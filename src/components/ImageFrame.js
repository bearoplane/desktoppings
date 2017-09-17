import React, { Component } from 'react'

import './ImageFrame.css'

const LoadingSpinner = () => (
  <div className="spinner-wrap">
    <span /><span /><span /><span />
    <span /><span /><span /><span />
  </div>
)

class ImageFrame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  render() {
    const { image, style } = this.props

    return (
      <div className="image-wrap">
        <LoadingSpinner />
        <div style={{ backgroundImage: `url(${image})` }} className="image-wrap-image" />
      </div>
    )
  }
}

export default ImageFrame
