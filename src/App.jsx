import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import component
import Navbar from "./component/Navbar";


function App() {
  return (
    <>
      <header><Navbar/></header>
      
      <footer>Copyright 2024</footer>
    </>
  );
}

export default App;
