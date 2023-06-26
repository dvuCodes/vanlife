import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../Context/Context"

const HostVanDetails = () => {
  const { vans } = useContext(Context)
  const params = useParams()

  const getSelectedVan = vans.find((van) => van.id === params.vanId)

  if (!getSelectedVan) {
    return `Loading..`
  }

  return (
    <>
      <h1>{getSelectedVan.name}</h1>
    </>
  )
}

export default HostVanDetails
