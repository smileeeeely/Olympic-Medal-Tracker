import React, { useState } from "react";
import "./App.css";

const App = () => {
  //여기는 js!
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);
  const [countries, setCountries] = useState([]);

/** 새로운 국가 추가 */
  const addNewCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    const res = countries.filter((it) => it.countryName.includes(countryName));
    if (res[0]) return alert("이미 등록된 국가입니다.");
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0)
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");

    const newCountry = {
      id: new Date().getTime(),
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    setCountries([...countries, newCountry]);
    setCountryName("");
    console.log("addNewCountry => ", newCountry);
  };

  /** 국가 업데이트 */
  const updateCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    const res = countries.filter((it) => it.countryName.includes(countryName));
    if (!res[0]) return alert("등록되지 않은 국가입니다.");
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0)
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");

    const updatedCountries = countries.map((country) => {
      if (country.countryName === countryName) {
        return {
          id: new Date().getTime(),
          countryName: countryName,
          goldMedal: goldMedal,
          silverMedal: silverMedal,
          bronzeMedal: bronzeMedal,
        };
      } else {
        return country;
      }
    });
    setCountries(updatedCountries);
    setCountryName("");
  };

  /** 국가 삭제 */
  const deleteCountry = (countryName) => {
    const filteredCountries = countries.filter(
      (country) => country.countryName !== countryName
    );
    setCountries(filteredCountries);
    console.log("filtedredCountries => ", filteredCountries);
  };

  return (
    // 여기는 html!
    <>
      <div className="header">
        <h1 className="title">2024 파리 올림픽</h1>
        <form onSubmit={addNewCountry} className="input-form">
          <label>
            국가:
            <input
              onChange={(e) => {
                setCountryName(e.target.value);
              }}
              id="countryNameInput"
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
          <button
            type="button"
            onClick={updateCountry}
            className="button"
            id="update_button"
          >
            업데이트
          </button>
        </form>
      </div>

      {/* 리스트 렌더링 */}
      <div>
        {countries
          .sort((a, b) => { return b.goldMedal - a.goldMedal; })
          .map(function (inputData) {
            return (
              <RenderCountryList
                inputData={inputData}
                deleteCountry={deleteCountry}
                countries={countries}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;

/** 국가 리스트 렌더링 */
const RenderCountryList = ({ inputData, deleteCountry}) => {
  return (
    <div className="country-list-style">
      <div> {inputData.countryName} </div>
      <div> {inputData.goldMedal}</div>
      <div>{inputData.silverMedal}</div>
      <div>{inputData.bronzeMedal}</div>
      <button
        type="button"
        onClick={() => deleteCountry(inputData.countryName)}
      >
        삭제
      </button>
    </div>
  );
};