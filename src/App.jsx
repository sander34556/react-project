import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";


// import component
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Footer from "./component/Footer";
import Navbar2 , { SidebarItem }from "./component/Navbar2";


function App() {
  return (
    <>
      <div className="grid">
        <Navbar></Navbar>
          {/* <Navbar2>
              <div>as</div>
          </Navbar2> */}
        <div className="flex">
          <Menubar></Menubar>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quaerat error odit quis fuga autem doloribus, sit aliquid blanditiis, totam odio, recusandae tempore molestiae debitis corrupti eligendi voluptate dolore accusamus.</p>
        </div>
      </div>
      
    </>
  );
}

export default App;
