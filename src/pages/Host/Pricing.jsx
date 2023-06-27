import React from "react"
import { useContext } from "react"
import { Context } from "../../Context/Context"
import { useParams } from "react-router-dom"

const Pricing = () => {
  const { findVan } = useContext(Context)
  const { vanId } = useParams()

  return <h1>${findVan(vanId).price}/day</h1>
}

export default Pricing
