import React, { useState } from "react";
import list from "react";

const MedalForm = () => {
  const [contry, setContry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  /** 새로운 리스트 등록 */
  const addNewList = (e) => {
    e.preventDefault();
    if (!contry) return alert("국가를 입력해주세요.");
    const res = list.filter((it) => it.contry.includes(contry));
    if (res[0]) return alert("이미 등록된 국가입니다.");

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

  /** 리스트 업데이트 */
  const updateList = (e) => {
    e.preventDefault();
    if (!contry) return alert("국가를 입력해주세요.");
    if (Object.keys(list).includes(contry)) {
      console.log("updateLIst => ", contry);
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
    console.log("updateList => ", newList);
  };

  return (
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
        <button type="submit" className="button" id="add_button">
          국가 추가
        </button>
        <button onClick={updateList} type="button" className="button" id="update_button">
          업데이트
        </button>
      </form>
    </div>
  );
};

export default MedalForm;
