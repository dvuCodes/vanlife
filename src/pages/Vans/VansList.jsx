import React, { useContext } from "react"
import { Context } from "../../Context/Context"
import VanCard from "../../components/VanCard"
import { useSearchParams } from "react-router-dom"

const VansList = () => {
  const { vans } = useContext(Context)
  const [searchParams, setSearchParams] = useSearchParams()

  const vanType = searchParams.get("type")

  const displayVans = vanType
    ? vans.filter((van) => van.type === vanType)
    : vans

  // map over van types to render filter buttons
  const getVanTypes = [...new Set(vans.map((van) => van.type))]
  const renderFilterBtns = getVanTypes.map((type) => (
    <button
      className="filter-btn"
      key={type}
      onClick={() => setSearchParams({ type: type })}
    >
      {type}
    </button>
  ))

  // map over vans to render them into van cards
  const renderVanCard = displayVans.map((van) => {
    return <VanCard key={van.id} {...van} />
  })

  const clearBtn = vanType ? (
    <button className="clear-btn" onClick={() => setSearchParams("?type=")}>
      Clear Filter
    </button>
  ) : null

  return (
    <>
      <div className="van-page-upper">
        <h1>Explore our van options</h1>
        <div className="filter-container">
          {renderFilterBtns} {clearBtn}
        </div>
      </div>
      <section className="vans-list-container">{renderVanCard}</section>
    </>
  )
}

export default VansList
