import React, { useContext } from "react"
import { Context } from "../../Context/Context"
import HostVanCard from "../../components/HostVanCard"

const HostVans = () => {
  const { vans } = useContext(Context)

  const getHostVans = vans.filter((van) => van.hostId === "123")
  const renderHostVans = getHostVans.map((van) => <HostVanCard {...van} />)

  return <div className="host-van-list-wrapper">{renderHostVans}</div>
}

export default HostVans
