
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Root() {
  return (
    <div className="max-w-7xl mx-auto">
       <Navbar></Navbar>
        <Outlet></Outlet>
       <Footer></Footer>
       <ToastContainer />
    </div>
  )
}

export default Root