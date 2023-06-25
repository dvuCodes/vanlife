import React from "react"
import "../styles/header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="header-title">#VANLIFE</h1>
      </Link>

      <nav className="header-nav">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}

export default Header
