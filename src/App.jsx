import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import VansList from "./pages/VansList"
import VanDetails from "./pages/VanDetails"
import "./server"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<VansList />}></Route>
        <Route path="/vans/:vanId" element={<VanDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
