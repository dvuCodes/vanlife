import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import VansList from "./pages/VansList"
import "./server"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Vans" element={<VansList />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
