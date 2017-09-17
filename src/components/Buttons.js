import React, { Component } from 'react'
import _ from 'lodash'

import './Buttons.css'

class Buttons extends Component {
  render() {
    const { selectImage, cur, timedOut } = this.props

    const extraClasses = timedOut ? "Buttons-button-hidden" : ""

    return (
      <div className="Buttons">
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

export default Buttons
