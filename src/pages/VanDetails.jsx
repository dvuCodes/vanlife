import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Context } from "../Context/context"

const VanDetails = () => {
  const { vans } = useContext(Context)
  const params = useParams()

  const getSelectedVan = vans.find((van) => van.id === params.vanId)
  console.log(getSelectedVan.type)
  let typeColor = ""
  if (getSelectedVan.type === "luxury") {
    typeColor = "#161616"
  } else if (getSelectedVan.type === "rugged") {
    typeColor = "#115E59"
  } else if (getSelectedVan.type === "simple") {
    typeColor = "#E17654"
  }

  return (
    <>
      <article className="van-detail-page">
        <div className="back-to-vans-link">
          <p>←</p>
          <Link to="/vans">Back to all vans</Link>
        </div>

        <img src={getSelectedVan.imageUrl} />
        <div className="van-type" style={{ backgroundColor: typeColor }}>
          {getSelectedVan.type}
        </div>
        <h1 className="van-name">{getSelectedVan.name}</h1>
        <h3 className="van-info">${getSelectedVan.price}/day</h3>
        <p>{getSelectedVan.description}</p>
        <button className="rent-van-btn">Rent this van</button>
      </article>
    </>
  )
}

export default VanDetails
