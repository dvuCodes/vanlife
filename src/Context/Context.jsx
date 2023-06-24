import React from "react"
import { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
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

  return <Context.Provider value={{ vans }}>{children}</Context.Provider>
}

export { ContextProvider, Context }
