import React, { Component } from 'react'

import './ImageFrame.css'

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
        <div className="image-wrap-image" style={{ backgroundImage: `url(${image})` }} />
      </div>
    )
  }
}

export default ImageFrame
