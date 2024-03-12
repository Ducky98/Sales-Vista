import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Into from './components/pages/Into.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import TodayRev from './components/pages/todayRev.jsx';
import TopSales from './components/pages/topFiveSales.jsx';
import AddSales from './components/pages/addSales.jsx';
import Navbar from './components/Navbar.jsx';

// Create context for managing login state
export const loginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(); // State variable for login status

  return (
    <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className="App bg-gradient-to-br from-slate-800 via-violet-500 to-zinc-600 w-full h-screen ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Into />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            {/* Protected routes */}
            <Route
              path='/addsales'
              element={
                loggedIn ? <AddSales /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path='/today-rev'
              element={
                loggedIn ? <TodayRev /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path='/topsales'
              element={
                loggedIn ? <TopSales /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </loginContext.Provider>
  );
}

export default App;
