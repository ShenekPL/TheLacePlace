import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import './App.css';
import logo from './Logo.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="Section">
          <img src={logo} alt="Logo" className="Logo" />
          <div className="Search"> 
            <TextField
              id="SearchBar"
              variant="outlined"
              fullWidth
              placeholder="Search"
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