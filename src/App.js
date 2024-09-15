import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import About from "./screen/About";
export default function App() {
  return (
    <Router>
    <>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          
          <Route path="/about" element={<About />} /> 

          <Route path="/login" element={<Login />} />
        </Routes>
    </>
</Router>

      
  );
}
