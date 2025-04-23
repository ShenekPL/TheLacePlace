import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import './App.css';
import logo from './Logo.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="Section">
          <img src={logo} alt="Logo" className="Logo" />
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
      </div>
        </section>
        <section className="Section2">
          <p>Diddy</p>
        </section>
      </header>
    </div>
  );
}

export default App;
