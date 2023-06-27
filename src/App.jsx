import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import VansList from "./pages/Vans/VansList"
import VanDetails from "./pages/Vans/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetails from "./pages/Host/HostVanDetails"
import Myvandetails from "./pages/Host/Myvandetails"
import Pricing from "./pages/Host/Pricing"
import Photos from "./pages/Host/Photos"

import "./server"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<VansList />}></Route>
          <Route path="vans/:vanId" element={<VanDetails />}></Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="my-vans" element={<HostVans />}></Route>
            <Route path="my-vans/:vanId" element={<HostVanDetails />}>
              <Route index element={<Myvandetails />}></Route>
              <Route path="pricing" element={<Pricing />}></Route>
              <Route path="photos" element={<Photos />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
