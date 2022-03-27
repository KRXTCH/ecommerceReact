import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search.js";
import Home from "./routes/Home.js";
import TierList from "./routes/TierList.js";
import React from 'react';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/tier-list" element={<TierList />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;