import React from 'react'
import Header from "./Header.jsx";
import About from "./About.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="mainpage-body">
        <Header />
        <About />
    </div>
  )
}
