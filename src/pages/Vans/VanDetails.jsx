import React, { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Context } from "../../Context/Context"

const VanDetails = () => {
  const { vans } = useContext(Context)
  const params = useParams()

  const getSelectedVan = vans.find((van) => van.id === params.vanId)

  if (!getSelectedVan) {
    return <div>Loading...</div>
  }

  return (
    <>
      <article className="van-detail-page">
        <div className="back-to-vans-link">
          <p>←</p>
          <Link to=".." relative="path">
            Back to all vans
          </Link>
        </div>
        <img src={getSelectedVan.imageUrl} />
        <div className={`van-type ${getSelectedVan.type}`}>
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
