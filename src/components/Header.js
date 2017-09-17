import React from 'react'

import './Header.css'

const Header = () => (
  <div className="Header">
    <h1 className="Header-title">&ldquo;Desktoppings!&rdquo;</h1>
    <div className="Header-checkers">
      { new Array(30).fill(true).map((v, i) => <span key={i} className="Header-checkers-square"></span>) }
    </div>
    <h1 className="Header-title">by Vicky Lam Photography</h1>
    <div className="Header-button-wrap">
      <a href="mailto:vicky@vickylam.com" className="Header-button Header-button-email"></a>
      <a href="http://vickylam.com" target="_blank" className="Header-button Header-button-website"></a>
      <a href="https://society6.com/desktoppings" target="_blank" className="Header-button Header-button-store"></a>
    </div>
  </div>
)

export default Header
