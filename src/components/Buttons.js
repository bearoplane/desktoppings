import React, { Component } from 'react'
import _ from 'lodash'

import { HotKeys } from 'react-hotkeys'

import './Buttons.css'

const map = {
  'download': 'down'
};

class Buttons extends Component {
  forceDownload = () => {
    console.log('downloading')
    this.refs.downloadButton.click()
  }

  render() {
    const { selectImage, cur, timedOut } = this.props

    const extraClasses = timedOut ? "Buttons-button-hidden" : ""

    const handlers = {
      down: e => { e.preventDefault(); this.forceDownload() }
    }

    return (
      <HotKeys keyMap={map} handlers={handlers}>
        <div className="Buttons">
          <div className={`Buttons-button Buttons-left ${extraClasses}`}>
            <button onClick={() => selectImage(-1)}></button>
          </div>
          <div className={`Buttons-button Buttons-right ${extraClasses}`}>
            <button onClick={() => selectImage(1)}></button>
          </div>
          <div className={`Buttons-button Buttons-download ${extraClasses}`}>
            <a ref="downloadButton" href={`/images/DeskToppings${cur + 1}.jpg`} target="_blank" download></a>
          </div>
        </div>
      </HotKeys>
    )
  }
}

export default Buttons
