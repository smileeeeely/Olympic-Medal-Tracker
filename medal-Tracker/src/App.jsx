import React, { useState } from "react";
import "./App.css";

const App = () => {
  //여기는 js!
  const [contry, setContry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

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

  const addNewList = (e) => {
    e.preventDefault();
    if (!contry) return alert("국가를 입력해주세요.");
    const res = list.filter((it) => it.contry.includes(contry));
    if (res[0]) {
      const contry = res[0].contry;
      return alert("이미 등록된 국가입니다.");
    }

    const newList = {
      id: new Date().getTime(),
      contry: contry,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    setList([...list, newList]);
    setContry("");
    console.log("addNewList => ", newList);
  };

  const updateList = (e) => {
    e.preventDefault();

    const newList = {
      id: new Date().getTime(),
      contry: contry,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    setList([...list, newList]);
    setContry("");
    console.log("updateList => ", newList);
  };

  return (
    // 여기는 html!
    <>
      <div className="header">
        <h1 className="title">2024 파리 올림픽</h1>
        <form onSubmit={addNewList} className="input-form">
          <label>
            국가:
            <input
              onChange={(e) => {
                setContry(e.target.value);
              }}
              id="contryInput"
              className="input-Box"
              type="text"
            />
          </label>
          <label>
            금메달:
            <input
              onChange={(e) => {
                setGoldMedal(e.target.value);
              }}
              className="input-Box"
              type="number"
              defaultValue={0}
            />
          </label>
          <label>
            은메달:
            <input
              onChange={(e) => {
                setSilverMedal(e.target.value);
              }}
              className="input-Box"
              type="number"
              defaultValue={0}
            />
          </label>
          <label>
            동메달:
            <input
              onChange={(e) => {
                setBronzeMedal(e.target.value);
              }}
              className="input-Box"
              type="number"
              defaultValue={0}
            />
          </label>
          <button className="button" id="add_button">
            국가 추가
          </button>
          <button onClick={updateList} className="button" id="update_button">
            업데이트
          </button>
        </form>
      </div>
      
      {/* 리스트 렌더링 */}
      <div>
        {list.map(function (listData) {
          // console.log("listData => ",listData);
          return <List key={listData.id} listData={listData} />;
        })}
      </div>
    </>
  );
};

export default App;

const List = ({ listData }) => {
  return (
    <div className="listStyle">
      {listData.contry} {listData.goldMedal} {listData.silverMedal}{" "}
      {listData.bronzeMedal}
    </div>
  );
};
