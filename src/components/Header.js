import React from 'react'

import './Header.css'

const Header = () => (
  <div className="Header">
    <h1 className="Header-title">"Desktoppings!" <span className="Header-checkers"></span> by Vicky Lam Photography</h1>
    <div className="Header-button-wrap">
      <a href="mailto:vicky@vickylam.com" className="Header-button Header-button-email"></a>
      <a href="http://vickylam.com" target="_blank" className="Header-button Header-button-website"></a>
    </div>
  </div>
)

export default Header
