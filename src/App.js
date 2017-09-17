import React, { Component } from 'react'
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
  'moveRight': 'right'
};

class App extends Component {
  constructor(props) {
    const visited = window.localStorage.getItem('visited')

    super(props)

    this.showButtons = debounce(this.showButtons, 500, { leading: true })
    this.selectImage = debounce(this.selectImage, 500, { leading: true })

    this.wrapperDiv = null
    this.timer = null
    this.state = {
      cur: 0,
      timedOut: false,
      visited: visited
    }
  }

  componentDidMount() {
    this.timer = setTimeout(this.hideButtons, 5000)
    this.wrapperDiv.focus()
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  clearSticker = () => {
    console.log('hey there')
    window.localStorage.setItem('visited', true)

    this.setState({
      visited: true
    })
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

    this.timer = setTimeout(this.hideButtons, 5000)
  }
  hideButtons = () => {
    this.setState({
      timedOut: true
    })
  }

  render() {
    const { cur, timedOut, visited } = this.state

    const handlers = {
      left: e => { e.preventDefault(); this.selectImage(-1); },
      right: e => { e.preventDefault(); this.selectImage(1) }
    }

    return (
      <HotKeys keyMap={map} handlers={handlers}>
        <div ref={(ele) => { this.wrapperDiv = ele }} className="App" onMouseMove={this.showButtons}>
          <Header timedOut={timedOut} />
          <Buttons cur={cur} selectImage={this.selectImage} timedOut={timedOut} />
          <BigImage cur={cur} />
          { visited ? null : <div onClick={this.clearSticker}><Sticker /></div> }
        </div>
      </HotKeys>
    )
  }
}
// images={Images}
export default App
