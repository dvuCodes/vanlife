import React from "react"

import { useOutletContext } from "react-router-dom"

const myvandetails = () => {
  const { selectedVan } = useOutletContext()

  return (
    <div className="my-van-details-wrapper">
      <p>
        <span className="bold"> Name:</span> {selectedVan.name}
      </p>
      <p>
        <span className="bold"> Category: </span> {selectedVan.type}
      </p>
      <p>
        <span className="bold"> Description: </span>
        {selectedVan.description}
      </p>
      <p>
        <span className="bold"> Visibility:</span> Public
      </p>
    </div>
  )
}

export default myvandetails
