import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
 let [str,setStr]=useState("")
  return (
    <div id="main">
      {setStr("I am learning React. My life is getting better.")}
      <p>{str}</p>
    </div>
  )
}


export default App;
