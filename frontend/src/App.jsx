import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Dashboard from "./components/Dashboard.jsx";
import Register from './components/Register.jsx';
import RefillList from './components/RefillList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/refill" element={<RefillList />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Navigate to="/login" /> */}
    </Router>
  );
}

export default App;
