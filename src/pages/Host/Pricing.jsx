import React from "react"
import { useOutletContext } from "react-router-dom"

const Pricing = () => {
  const { selectedVan } = useOutletContext()

  return <h1>${selectedVan.price}/day</h1>
}

export default Pricing
