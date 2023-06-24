import React, { useContext } from "react"
import { Context } from "../Context/context"
import VanCard from "../components/VanCard"

const VansList = () => {
  const { vans } = useContext(Context)

  // map over van types to render filter buttons
  const getVanTypes = [...new Set(vans.map((van) => van.type))]
  const renderFilterBtns = getVanTypes.map((type) => (
    <button className="filter-btn" key={type}>
      {type}
    </button>
  ))

  // map over vans to render them into van cards
  const renderVanCard = vans.map((van) => {
    return <VanCard key={van.id} {...van} />
  })

  return (
    <>
      <div className="van-page-upper">
        <h1>Explore our van options</h1>
        <div className="filter-container">
          {renderFilterBtns}
          <p>Clear Filter</p>
        </div>
      </div>
      <section className="vans-list-container">{renderVanCard}</section>
    </>
  )
}

export default VansList
