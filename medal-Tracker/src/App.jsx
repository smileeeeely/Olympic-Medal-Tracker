import React, { useState } from "react";
import "./App.css";

const App = () => {
  //여기는 js!
  const [list, setList] = useState([
    {
      id: new Date().getTime(),
      contry: "cancada",
      goldMedal: 1,
      silverMedal: 2,
      bronzeMedal: 3,
    },
    {
      id: new Date().getTime() + 1,
      contry: "korea",
      goldMedal: 3,
      silverMedal: 4,
      bronzeMedal: 2,
    },
    {
      id: new Date().getTime() + 2,
      contry: "japan",
      goldMedal: 0,
      silverMedal: 1,
      bronzeMedal: 0,
    },
  ]);

  const addContryName = (e) => {
    const contry = e.target.value;
    setList({ ...list, contry });
  };

  const addGoldMedal = (e) => {
    const goldMedal = Number(e.target.value);
    setList({ ...list, goldMedal });
  };

  const addSilverMedal = (e) => {
    const silverMedal = Number(e.target.value);
    setList({ ...list, silverMedal });
  };

  const addBronzeMedal = (e) => {
    const bronzeMedal = Number(e.target.value);
    setList({ ...list, bronzeMedal });
  };
  console.log(list);

  const clickEvent = (e) => {
    e.preventDefault();

    const newList = {
      id: new Date().getTime(),
      contry: contry,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal, 
    }
    setList([...list, newList]);

  };

  const [contry, setContry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  return (
    // 여기는 html!
    <>
      <div className="header">
        <h1 className="title">2024 파리 올림픽</h1>
        <form onSubmit={clickEvent} className="input-form">
          <label>
            국가:
            <input
              onChange={(e) => {setContry(e.target.value)}}
              id="contryInput"
              className="input-Box"
              type="text"
            />
          </label>
          <label>
            금메달:
            <input
              onChange={(e) => {setGoldMedal(e.target.value)}}
              className="input-Box"
              type="number"
              defaultValue={0}
            />
          </label>
          <label>
            은메달:
            <input
              onChange={(e) => {setSilverMedal(e.target.value)}}
              className="input-Box"
              type="number"
              defaultValue={0}
            />
          </label>
          <label>
            동메달:
            <input
              onChange={(e) => {setBronzeMedal(e.target.value)}}
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

      {list.map(function (listData) {
        console.log("listData => ",listData);
        return <List key={listData.id} listData={listData}/>;
      })}
    </>
  );
};

export default App;

const List = ({listData}) => {
  return (
  <div className="listStyle">
    {listData.contry}  {listData.goldMedal} {listData.silverMedal}  {listData.bronzeMedal}
  </div>
  );
};