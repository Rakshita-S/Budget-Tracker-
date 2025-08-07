import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'; // adjust path if it's in a folder
import Login from './components/Login';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
