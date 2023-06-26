import React, { useContext } from "react"
import { useParams, NavLink } from "react-router-dom"
import { Context } from "../../Context/Context"

const HostVanDetails = () => {
  const { vans } = useContext(Context)
  const params = useParams()

  const getSelectedVan = vans.find((van) => van.id === params.vanId)

  if (!getSelectedVan) {
    return `Loading..`
  }

  return (
    <div className="my-vans-detail-wrapper">
      <div className="my-vans-detail-header">
        <img src={getSelectedVan.imageUrl} />
        <h2>{getSelectedVan.name}</h2>
        <p>${getSelectedVan.price}/day</p>
      </div>
      <div className="my-vans-detail-main">
        <nav className="my-vans-nav">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <p>
          <span className="bold"> Name:</span> {getSelectedVan.name}
        </p>
        <p>
          <span className="bold"> Category:</span> {getSelectedVan.type}
        </p>
        <p>
          <span className="bold"> Description:</span>{" "}
          {getSelectedVan.description}
        </p>
        <p>
          <span className="bold"> Visibility:</span> Public
        </p>
      </div>
    </div>
  )
}

export default HostVanDetails
