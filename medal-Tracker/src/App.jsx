import React, { useState } from "react";
import "./App.css";

const Header = () => {
  //여기는 js!
  const [items, setItems] = useState({
    contry: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });

  const addContryName = (e) => {
    const contry = e.target.value;
    setItems({ ...items, contry });
  };

  const addGoldMedal = (e) => {
    const goldMedal = Number(e.target.value);
    setItems({ ...items, goldMedal });
  };

  const addSilverMedal = (e) => {
    const silverMedal = Number(e.target.value);
    setItems({ ...items, silverMedal });
  };

  const addBronzeMedal = (e) => {
    const bronzeMedal = Number(e.target.value);
    setItems({ ...items, bronzeMedal });
  };
  console.log(items);

  const clickEvent = (e) => {
    e.preventDefault();
  }

  return (
    // 여기는 html!
    <div className="header">
      <h1 className="title">2024 파리 올림픽</h1>
      <form onSubmit={clickEvent} className="input-form">
        <label>
          국가:{" "}
          <input
            onChange={addContryName}
            id="contryInput"
            className="input-Box"
            type="text"
          />
        </label>
        <label>
          금메달:{" "}
          <input
            onChange={addGoldMedal}
            className="input-Box"
            type="number"
            defaultValue={0}
          />
        </label>
        <label>
          은메달:{" "}
          <input
            onChange={addSilverMedal}
            className="input-Box"
            type="number"
            defaultValue={0}
          />
        </label>
        <label>
          동메달:{" "}
          <input
            onChange={addBronzeMedal}
            className="input-Box"
            type="number"
            defaultValue={0}
          />
        </label>
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
