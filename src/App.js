import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search.js";
import Home from "./routes/Home.js";
import Details from "./routes/Details.js";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/search" element={<Search/>}>
              <Route path="details/:id" element={<Details/>}/>
          </Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
