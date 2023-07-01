import React, { useContext } from "react"
import { Context } from "../../Context/Context"
import VanCard from "../../components/VanCard"
import { useSearchParams, Link } from "react-router-dom"

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

  return (
    <>
      <div className="van-page-upper">
        <h1>Explore our van options</h1>
        <div className="filter-container">
          {renderFilterBtns}
          <Link to={`?type=`}>
            <p>Clear Filter</p>
          </Link>
        </div>
      </div>
      <section className="vans-list-container">{renderVanCard}</section>
    </>
  )
}

export default VansList
