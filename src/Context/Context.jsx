import React from "react"
import { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [vans, setVans] = useState([])

  const findVan = (id) => vans.find((van) => van.id === id)

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

  return (
    <Context.Provider value={{ vans, findVan }}>{children}</Context.Provider>
  )
}

export { ContextProvider, Context }
