import React, { useState } from "react";
import "./App.css";
import RenderList from "./components/RenderList";
import MedalForm from "./components/MedalForm";

const App = () => {
  const [countries, setCountries] = useState([]);

  /** 국가 삭제 */
  const deleteCountry = (countryName) => {
    const filteredCountries = countries.filter(
      (country) => country.countryName !== countryName
    );
    setCountries(filteredCountries);
  };

  return (
    <>
      <MedalForm countries={countries} setCountries={setCountries} />
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
