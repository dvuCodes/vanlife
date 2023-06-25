import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <main>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="find-van-btn-container" to="/vans">
          <button className="find-van-btn">Find your van</button>
        </Link>
      </main>
    </>
  )
}

export default Home
