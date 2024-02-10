import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={< Home />} />
      </Routes>
      {/* <Navigate to="/login" /> */}
    </Router>
  );
}

export default App;
