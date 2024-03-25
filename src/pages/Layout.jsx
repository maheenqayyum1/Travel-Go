import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Popup from '../Components/Popup/Popup';

const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
      setOrderPopup(!orderPopup)
  }

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  );
}

export default Layout;
