import React from "react"
import "../styles/header.css"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="header-title">#VANLIFE</h1>
      </Link>

      <nav className="header-nav">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
