import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import SellerFirstNav from '../components/SellerFirstNav.jsx'
import Footer from '../components/Footer.jsx'
const SellerLayout = () => {
  return (
    <>
      <SellerFirstNav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default SellerLayout