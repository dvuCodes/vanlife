import React, { useState, useEffect } from "react"
import VanCard from "../components/VanCard"
import { render } from "react-dom"

const VansList = () => {
  const [vans, setVans] = useState([])

  const fetchVanData = async () => {
    try {
      const res = await fetch("/api/vans")
      const data = await res.json()
      setVans(data.vans)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchVanData()
  }, [])

  // map over vans to render them into van cards
  const renderVanCard = vans.map((van) => {
    return <VanCard key={van.id} {...van} />
  })

  return (
    <>
      <div className="filter-container">
        <button className="filter-btn">orange</button>
        <button className="filter-btn">orange</button>
        <button className="filter-btn">orange</button>
        <p>Clear All Filters</p>
      </div>
      <section className="vans-list-container">{renderVanCard}</section>
    </>
  )
}

export default VansList
