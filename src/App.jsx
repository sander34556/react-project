import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import component
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <header><Navbar/></header>
      <div className="grid grid-cols-[200px_1fr] grid-rows-[1fr_20px] gap-1">
        <Menubar/>
        <p className="bg-amber-200 row-span-2 overflow-x-auto fixed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore ut ipsa, autem distinctio corrupti iste doloremque cum ullam vitae, eligendi beatae nihil libero eius repudiandae praesentium facere voluptatibus. Sed.</p>
        <Footer/>
      </div>
      
      
    </>
  );
}

export default App;
