import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ClientInfo from "./pages/client/ClientInfo";
import SellerInfo from "./pages/seller/SellerInfo";
import SearchPage from "./pages/client/SearchPage";
import ClientProfile from "./pages/client/ClientProfile";
import ClientHome from "./pages/client/ClientHome.jsx"
import AboutUs from './pages/AboutUs'
import SellerLayout from './layouts/SellerLayout'
import ClientLayout from './layouts/ClientLayout'
import SellerHome from './pages/seller/SellerHome'
import SellerStore from './pages/seller/SellerStore'
import SellerOrders from './pages/seller/SellerOrders'
import NotFoundPage from './pages/NotFoundPage'
import SellerProfile from './pages/seller/SellerProfile'

function App() {
  return (
    <>
    <Routes>

      //? _unAuth pathes 
      <Route path='/'>
        <Route index element={<HomePage/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='register' element={<SignUp/>}/>
        <Route path='register/client' element={<ClientInfo/>}/>
        <Route path='register/seller' element={<SellerInfo/>}/>
      </Route>

      //? client pathes
      <Route path='/client' element={<ClientLayout/>}>
        <Route path='home' element={<ClientHome/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='profile' element={<ClientProfile/>}/>
        <Route path='*' element={<NotFoundPage dest='/client/home'/>}/>
      </Route>
      <Route path='/client/search' element={<SearchPage/>}/>

      //? seller pathes
      <Route path='/seller' element={<SellerLayout/>}>
        <Route path='profile' element={<SellerProfile/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='*' element={<NotFoundPage dest='/seller/home/store'/>}/>
      </Route>

      <Route path='/seller/home' element={<SellerHome/>}>
        <Route path='store' element={<SellerStore/>}/>
        <Route path='orders' element={<SellerOrders/>}/>
        <Route path='*' element={<NotFoundPage dest='/seller/home/store'/>}/>
      </Route>



      //? admin pathes
      <Route path='/admin'>
        <Route path='sign-in' element={""}/>
        <Route path='register' element={""}/>
        <Route path='register/client' element={""}/>
        <Route path='register/seller' element={""}/>
      </Route>


      <Route path='*' element={<NotFoundPage dest='/'/>}/>
    </Routes>
    </>
  );
}

export default App;
