import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Buttons from './components/Buttons'
import BigImage from './components/BigImage'

const numImages = 7

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cur: 0
    }
  }

  selectImage = (dir) => {
    const { cur } = this.state

    this.setState({
      cur: (cur + dir) < 0 ? numImages - 1 : (cur + dir) % numImages
    })
  }

  render() {
    const { cur } = this.state

    return (
      <div className="App">
        <Header />
        <Buttons cur={cur} selectImage={this.selectImage} />
        <BigImage cur={cur} />
      </div>
    )
  }
}
// images={Images}
export default App
