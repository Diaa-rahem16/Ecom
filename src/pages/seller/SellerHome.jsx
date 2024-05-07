import React , {useState} from 'react'
import { Outlet , Link } from 'react-router-dom'
import SellerSecondNav from './../../components/SellerSecondNav'
import SellerFirstNav from './../../components/SellerFirstNav'
import Footer from './../../components/Footer.jsx'

const SellerHome = () => {
  return (
    <>
        <SellerFirstNav/>
        <SellerSecondNav/>
        <Outlet className="seller-home-outlet" />
        <Footer/>
    </>
    
  )
}

export default SellerHome