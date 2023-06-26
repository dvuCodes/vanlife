import React from "react"
import { Link } from "react-router-dom"

const HostVanCard = ({ name, id, imageUrl, price }) => {
  return (
    <>
      <Link to={`/host/my-vans/${id}`}>
        <div className="host-van-wrapper">
          <img src={imageUrl} />
          <div className="host-van-details">
            <h3>{name}</h3>
            <p>${price}/day</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default HostVanCard
