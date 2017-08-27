import React from 'react'

import './Buttons.css'

const Buttons = ({ selectImage, cur }) => (
  <div className="Buttons">
    <button className="Buttons-button Buttons-left" onClick={() => selectImage(-1)}></button>
    <button className="Buttons-button Buttons-right" onClick={() => selectImage(1)}></button>
    <a href={`/images/DeskToppings${cur + 1}.jpg`} target="_blank" download className="Buttons-button Buttons-download"></a>
  </div>
)

export default Buttons
