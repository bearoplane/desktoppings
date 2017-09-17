import React, { Component } from 'react'
import _ from 'lodash'

import './Buttons.css'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.showButtons = _.debounce(this.showButtons, 500, { leading: true })

    this.timer = null
    this.state = {
      buttonsHidden: false
    }
  }

  componentDidMount() {
    this.timer = setTimeout(this.hideButtons, 5000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  showButtons = () => {
    console.log('showing buttons')


    clearTimeout(this.timer)

    this.setState({
      buttonsHidden: false
    })

    this.timer = setTimeout(this.hideButtons, 5000)
  }
  hideButtons = () => {
    this.setState({
      buttonsHidden: true
    })
  }

  render() {
    const { selectImage, cur } = this.props

    const extraClasses = this.state.buttonsHidden ? "Buttons-button-hidden" : ""

    return (
      <div className="Buttons" onMouseMove={this.showButtons}>
        <div className={`Buttons-button Buttons-left ${extraClasses}`}>
          <button onClick={() => selectImage(-1)}></button>
        </div>
        <div className={`Buttons-button Buttons-right ${extraClasses}`}>
          <button onClick={() => selectImage(1)}></button>
        </div>
        <div className={`Buttons-button Buttons-download ${extraClasses}`}>
          <a href={`/images/DeskToppings${cur + 1}.jpg`} target="_blank" download></a>
        </div>
      </div>
    )
  }
}

// const Buttons = ({ selectImage, cur }) =>

export default Buttons



// .Buttons-button-hidden
