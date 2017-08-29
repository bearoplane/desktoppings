import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ImageFrame from './ImageFrame'

import './BigImage.css'

class BigImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dir: 'l'
    }
  }

  componentWillReceiveProps(props) {
    if (props.cur === 0 && this.props.cur !== 1) {
      this.setState({ dir: 'l' })
    } else if (props.cur !== 1 && this.props.cur === 0) {
      this.setState({ dir: 'r' })
    } else if (this.props.cur < props.cur) {
      this.setState({ dir: 'l' })
    } else {
      this.setState({ dir: 'r' })
    }
  }

  render() {
    const { cur } = this.props
    const { dir } = this.state

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={`${dir}carousel`}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <ImageFrame key={cur} image={`/images/${cur + 1}.jpg`} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default BigImage

/*



const BigImage = ({ cur }) => (
  <div style={
    {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundImage: `url(/images/${cur + 1}.jpg)`,
      backgroundSize: 'cover'
    }
  }>
  </div>
)

export default BigImage
*/
