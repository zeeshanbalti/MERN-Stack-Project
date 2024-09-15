import React from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Carosal from "../component/Carosal";
import Footer from "../component/Footer";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carosal />
      </div>
      <div className="d-flex" style={{flexWrap: "wrap", justifyContent:"space-around"}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
