import React, { useState } from "react";
import "./App.css";
import RenderList from "./components/RenderList";
import MedalForm from "./components/MedalForm";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);
  const [countries, setCountries] = useState([]);

  /** 새로운 국가 추가 */
  const addNewCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    if (countries.some((country) => country.countryName === countryName)){
      return alert("이미 등록된 국가입니다.");
    }
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0){
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");
    }

    const newCountry = {
      id: crypto.randomUUID(),
      countryName: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    };
    setCountries([...countries, newCountry]);
    setCountryName("");
  };

  /** 국가 업데이트 */
  const updateCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    if (countries.some((country) => country.countryName !== countryName)){
      return alert("등록되지 않은 국가입니다.");
    }
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0){
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");
    }

    const updatedCountries = countries.map((country) => {
      if (country.countryName === countryName) {
        return {
          id: crypto.randomUUID(),
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
  };

  return (
    <>
      <MedalForm
        addNewCountry={addNewCountry}
        updateCountry={updateCountry}
        countries={countries}
        setCountryName={setCountryName}
        RenderList={RenderList}
        deleteCountry={deleteCountry}
        setGoldMedal={setGoldMedal}
        setSilverMedal={setSilverMedal}
        setBronzeMedal={setBronzeMedal}
        countryName={countryName}
      />
      <div>
        {countries
          .sort((a, b) => {
            return b.goldMedal - a.goldMedal;
          })
          .map(function (inputData) {
            return (
              <RenderList
                key={inputData.id}
                inputData={inputData}
                deleteCountry={deleteCountry}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;
