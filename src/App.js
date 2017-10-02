import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { debounce } from 'lodash'

import { HotKeys } from 'react-hotkeys'

import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Buttons from './components/Buttons'
import BigImage from './components/BigImage'
import Sticker from './components/Sticker'

const numImages = 7

const map = {
  'moveLeft': 'left',
  'moveRight': 'right',
  'download': { sequence: 'down', action: 'keydown' }
};

class App extends Component {
  constructor(props) {
    const visited = window.localStorage.getItem('visited')
    window.localStorage.setItem('visited', true)

    super(props)

    this.showButtons = debounce(this.showButtons, 500, { leading: true })
    this.selectImage = debounce(this.selectImage, 500, { leading: true })
    this.download = debounce(this.download, 1000, { leading: true })

    this.timer = null
    this.state = {
      cur: 0,
      timedOut: false,
      visited: visited
    }
  }

  componentDidMount() {
    this.timer = setTimeout(this.hideButtons, 3000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  download = () => {
    this.refs.buttons.forceDownload()
  }
  selectImage = (dir) => {
    const { cur } = this.state

    this.showButtons()

    this.setState({
      cur: (cur + dir) < 0 ? numImages - 1 : (cur + dir) % numImages
    })
  }
  showButtons = () => {
    clearTimeout(this.timer)

    this.setState({
      timedOut: false
    })

    this.timer = setTimeout(this.hideButtons, 2500)
  }
  hideButtons = () => {
    this.setState({
      timedOut: true
    })
  }

  render() {
    const { cur, timedOut, visited } = this.state

    const handlers = {
      left: e => { e.preventDefault(); this.selectImage(-1) },
      right: e => { e.preventDefault(); this.selectImage(1) },
      down: e => { e.preventDefault(); this.download() }
    }

    const autofocus = (el) => {
      const found = ReactDOM.findDOMNode(el)
      if (found) {
        found.focus()
      }
    }

    return (
      <HotKeys ref={autofocus} keyMap={map} handlers={handlers}>
        <div className="App" onMouseMove={this.showButtons}>
          <Header timedOut={timedOut} />
          <Buttons ref="buttons" cur={cur} selectImage={this.selectImage} timedOut={timedOut} />
          <BigImage cur={cur} />
          { visited ? null : <Sticker /> }
          <Sticker />
        </div>
      </HotKeys>
    )
  }
}
//
export default App
