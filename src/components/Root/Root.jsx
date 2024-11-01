
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"


function Root() {
  return (
    <div className="max-w-7xl mx-auto">
       <Navbar></Navbar>
        <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default Root