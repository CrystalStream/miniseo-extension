import React from 'react'
import Logo from '../assets/img/logo-icon.png'
import TextLogo from '../assets/img/text-logo.png'

export default function Header(prpos) {

  return (
    <nav className="navbar app-navbar is-flex" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={Logo} alt="Scrap sites" className="icon" />
          <img src={TextLogo} alt="Scrap sites" className="text-icon"  />
        </a>
      </div>
    </nav>
  )
}
