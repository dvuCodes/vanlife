import React from "react"
import { Outlet, NavLink } from "react-router-dom"

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/my-vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          My Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <div className="host-wrapper">
        <Outlet />
      </div>
    </>
  )
}

export default HostLayout
