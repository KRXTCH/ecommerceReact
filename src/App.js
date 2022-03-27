import "./App.css";
import { Header } from "./models/Header";
import { Cocktails } from "./models/Cocktails";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="app">
      <Header value={value} setValue={setValue}></Header>
      <Cocktails name={value}></Cocktails>
    </div>
  );
}

export default App;