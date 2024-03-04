import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Into from './components/pages/Into.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import TodayRev from './components/pages/todayRev.jsx';
import TopSales from './components/pages/topFiveSales.jsx';
import AddSales from './components/pages/addSales.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App bg-[#e7e7e7d1] w-full h-screen ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Into />} />
          <Route path='/addsales' element={<AddSales />} />
          <Route path='/today-rev' element={<TodayRev />} />
          <Route path='/topsales' element={<TopSales />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
