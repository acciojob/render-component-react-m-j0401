import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  [str,setStr]=useState("")
  return (
    <div id="main">
      <p>setStr(I am learning React. My life is getting better.)</p>
    </div>
  )
}


export default App;
