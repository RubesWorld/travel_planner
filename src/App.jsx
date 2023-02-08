import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

//imports
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
