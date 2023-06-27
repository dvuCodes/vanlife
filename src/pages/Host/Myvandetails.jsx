import React, { useContext } from "react"
import { Context } from "../../Context/Context"
import { useParams } from "react-router-dom"

const myvandetails = () => {
  const { findVan } = useContext(Context)
  const { vanId } = useParams()

  const thisVan = findVan(vanId)

  return (
    <div className="my-van-details-wrapper">
      <p>
        <span className="bold"> Name:</span> {thisVan.name}
      </p>
      <p>
        <span className="bold"> Category: </span> {thisVan.type}
      </p>
      <p>
        <span className="bold"> Description: </span>
        {thisVan.description}
      </p>
      <p>
        <span className="bold"> Visibility:</span> Public
      </p>
    </div>
  )
}

export default myvandetails
