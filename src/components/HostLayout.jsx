import React from "react"
import { Outlet, NavLink } from "react-router-dom"

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="my-vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          My Vans
        </NavLink>
        <NavLink
          to="reviews"
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
