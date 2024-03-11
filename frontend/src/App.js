import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Into from './components/pages/Into.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import TodayRev from './components/pages/todayRev.jsx';
import TopSales from './components/pages/topFiveSales.jsx';
import AddSales from './components/pages/addSales.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem("tokenDetail");
  
    // Check if token exists and try to decode it
    if (token) {
      try {
        // eslint-disable-next-line
        const decoded = jwtDecode(token);  
        
        // console.log(decoded)
        setLoggedIn(true); // If successful, set loggedIn to true
      } catch (error) {
        console.error("Invalid JWT token:", error); // Handle decoding error
        handleLogout(); // If decoding fails, run logout
      }
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("tokenDetail");
    localStorage.removeItem("loginEmail");
    setLoggedIn(false);
  };

  return (
    <div className="App bg-gradient-to-br from-slate-800 via-violet-500 to-zinc-600 w-full h-screen ">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Into />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          {/* Protected routes */}
          <Route
            path='/addsales'
            element={loggedIn ? <AddSales /> : <Navigate to="/login" />}
          />
          <Route
            path='/today-rev'
            element={loggedIn ? <TodayRev /> : <Navigate to="/login" />}
          />
          <Route
            path='/topsales'
            element={loggedIn ? <TopSales /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
