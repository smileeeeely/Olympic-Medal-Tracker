import React, { useState } from "react";
import "./App.css";

const App = () => {
  //여기는 js!
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  const [countries, setCountries] = useState([
    {
      id: new Date().getTime(),
      countryName: "cancada",
      goldMedal: 1,
      silverMedal: 2,
      bronzeMedal: 3,
    },
    {
      id: new Date().getTime() + 1,
      countryName: "korea",
      goldMedal: 3,
      silverMedal: 4,
      bronzeMedal: 2,
    },
    {
      id: new Date().getTime() + 2,
      countryName: "japan",
      goldMedal: 0,
      silverMedal: 1,
      bronzeMedal: 0,
    },
  ]);

  const addNewCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    const res = countries.filter((it) => it.countryName.includes(countryName));
    if (res[0]) {
      return alert("이미 등록된 국가입니다.");
    }

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

  const updateCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");

    const newCountry = {
      id: new Date().getTime(),
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    setCountries([...countries, newCountry]);
    setCountryName("");
    console.log("updateCountry => ", newCountry);
  };

  const deleteCountry = (countryName) => {
    const filteredCountries = countries.filter((country) => country.countryName !== countryName);
    console.log(filteredCountries);
    {/* setContries([...contries, filteredContries]); */}
    setCountries(filteredCountries);
    console.log("filtedredCountries => ", filteredCountries);
  }

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
          <button type="button" onClick={updateCountry} className="button" id="update_button">
            업데이트
          </button>
        </form>
      </div>
      
      {/* 리스트 렌더링 */}
      <div>
        {countries.map(function (countriesData) {
          return <CountryList key={countriesData.id} countriesData={countriesData} deleteCountry={deleteCountry} />;
        })}
      </div>
    </>
  );
};

export default App;

const CountryList = ({ countriesData, deleteCountry }) => {
  return (
    <div className="contry-list-style">
      {countriesData.contryName} {countriesData.goldMedal} {countriesData.silverMedal}{" "}
      {countriesData.bronzeMedal} <button type="button" onClick={() => deleteCountry(countriesData.countryName)}>삭제</button>
    </div>
  );
};
