import React from "react";
import "./App.css";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <div className="title">2024 파리 올림픽</div>
          {/* <input className="input-Box"></input> */}
          <ul>
            <input className="input-Box"></input>
            <input></input>
            <input></input>
            <input></input>
          </ul>
        </div>
      </div>
    </>
  );
}

const App = () => {
  return Header();
};

export default App;
