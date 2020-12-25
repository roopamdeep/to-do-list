import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add items" />
          <button className="b1">+</button>
          <ul>
            <li>Buy Apple</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
