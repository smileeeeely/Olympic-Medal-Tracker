import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">2024 파리 올림픽</div>
      <form className="input-form">
        <label>
          국가: <input className="input-Box" type="text" />
        </label>
        <label>
          금메달: <input className="input-Box" type="number" defaultValue={0} />
        </label>
        <label>
          은메달: <input className="input-Box" type="number" defaultValue={0} />
        </label>
        <label>
          동메달: <input className="input-Box" type="number" defaultValue={0} />
        </label>
      </form>
      <form className="button-form">
        <button className="button" id="add_button">
          국가 추가
        </button>
        <button className="button" id="update_button">
          업데이트
        </button>
      </form>
    </div>
  );
};


const App = () => {
  return Header();
};

export default App;
