import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Products from "routes/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
