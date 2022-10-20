import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from "./components/Welcome.js";
import Logo from "./components/Logo.js";
import Navbar from"./components/Navabr.js";
import "./App.css";

const name = "Rauf";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Welcome / >
    <Logo  / >
    <Navbar />
    <h1>This app is built by {name}</h1>
  </div>
);
