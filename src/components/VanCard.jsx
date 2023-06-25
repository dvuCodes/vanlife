import React from "react"
import { Link } from "react-router-dom"
import "../styles/van-card.css"

const VanCard = ({ imageUrl, name, price, type, id }) => {
  // conditional styling for the van type buttons

  return (
    <>
      <div className="van-card-container">
        <Link to={`/vans/${id}`}>
          <img className="van-poster" src={imageUrl} alt={`${name}-${id}`} />
        </Link>

        <h3 className="van-info">
          <span className="van-name">{name}</span>
          <span className="van-price">${price}</span>
          <span className="lower-font">/day</span>
        </h3>
        <div className={`van-type ${type}`}>{type}</div>
      </div>
    </>
  )
}

export default VanCard
