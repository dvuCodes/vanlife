import React from "react"
import "../styles/header.css"
import { Link, Route, Routes } from "react-router-dom"
import About from "../pages/About"

const Header = () => {
  return (
    <header>
      <h1 className="header-title">#VANLIFE</h1>
      <nav>
        <Link className="nav-items" to="/">
          Home
        </Link>
        <Link className="nav-items" to="/About">
          About
        </Link>
        <Link to="Vans" className="nav-items">
          Vans
        </Link>
      </nav>
    </header>
  )
}

export default Header
