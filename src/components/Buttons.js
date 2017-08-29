import React from 'react'

import './Buttons.css'

const Buttons = ({ selectImage, cur }) => (
  <div className="Buttons">
    <div className="Buttons-button Buttons-left">
      <button onClick={() => selectImage(-1)}></button>
    </div>
    <div className="Buttons-button Buttons-right">
      <button onClick={() => selectImage(1)}></button>
    </div>
    <div className="Buttons-button Buttons-download">
      <a href={`/images/DeskToppings${cur + 1}.jpg`} target="_blank" download></a>
    </div>
  </div>
)

export default Buttons
