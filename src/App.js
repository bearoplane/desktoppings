import React, { Component } from 'react'

import { HotKeys } from 'react-hotkeys'

import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Buttons from './components/Buttons'
import BigImage from './components/BigImage'

const numImages = 7

const map = {
  'moveLeft': 'left',
  'moveRight': 'right'
};

class App extends Component {
  constructor(props) {
    super(props)

    this.busy = false
    this.timer = null
    this.state = {
      cur: 0
    }
  }

  selectImage = (dir) => {
    const { cur } = this.state

    if (this.busy) return

    // Clear any existing timeout
    clearTimeout(this.timer)

    this.busy = true

    this.timer = setTimeout(() => { this.busy = false }, 500)

    this.setState({
      cur: (cur + dir) < 0 ? numImages - 1 : (cur + dir) % numImages
    })
  }

  render() {
    const { cur } = this.state

    const handlers = {
      left: e => { e.preventDefault(); this.selectImage(-1); },
      right: e => { e.preventDefault(); this.selectImage(1) }
    }

    return (
      <HotKeys keyMap={map} handlers={handlers}>
        <div className="App">
          <Header />
          <Buttons cur={cur} selectImage={this.selectImage} />
          <BigImage cur={cur} />
        </div>
      </HotKeys>
    )
  }
}
// images={Images}
export default App
