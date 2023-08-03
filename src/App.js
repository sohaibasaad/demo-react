import React, { useState, useEffect } from "react";
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './components/Login.js'
import Home from './components/Home.js';
import TotalPayment from './components/TotalPayment.js'
import VerifyPayment from './components/VerifyPayment.js'

function App() {
  // var $ = require( "jquery" )

  // const [header, setHeader] = useState(false);

  // useEffect(() => {
  //   let currentURL = window.location.pathname
  //   console.log(currentURL)
  //   if (currentURL === '' || currentURL === '/' || currentURL === '/login' || currentURL === 'logout') {
  //     setHeader(false);
  //   }
  //   else {
  //     setHeader(true);
  //   }
  // }, []);

  const location = useLocation();
  const { pathname } = location;
  const noHeaderPaths = ['/login', '', '/', '/logout'];
  const showHeader = !noHeaderPaths.includes(pathname);

  return (
    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/total-payments" element={<TotalPayment />} />
        <Route exact path="/verify-payment" element={<VerifyPayment />} />
      </Routes>
    </div >
  );
}

export default App;
