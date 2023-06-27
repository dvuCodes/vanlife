import React, { useContext } from "react"
import { useParams, NavLink, Link, Outlet } from "react-router-dom"
import { Context } from "../../Context/Context"

const HostVanDetails = () => {
  const { vans } = useContext(Context)
  const params = useParams()

  const getSelectedVan = vans.find((van) => van.id === params.vanId)

  if (!getSelectedVan) {
    return `Loading..`
  }

  return (
    <div className="my-vans-page-wrapper">
      <div className="back-to-vans-link">
        <p>←</p>
        <Link to=".." relative="path">
          Back to all vans
        </Link>
      </div>
      <div className="my-vans-detail-wrapper">
        <div className="my-vans-detail-header">
          <img src={getSelectedVan.imageUrl} />
          <h2>{getSelectedVan.name}</h2>
          <p>${getSelectedVan.price}/day</p>
        </div>
        <div className="my-vans-detail-main">
          <nav className="my-vans-nav">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HostVanDetails
