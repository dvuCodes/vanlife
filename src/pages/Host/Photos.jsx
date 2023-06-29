import React from "react"
import { useOutletContext } from "react-router-dom"

const Photos = () => {
  const { selectedVan } = useOutletContext()
  return <img src={selectedVan.imageUrl} />
}

export default Photos
