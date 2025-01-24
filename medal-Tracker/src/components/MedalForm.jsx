import React, { useState } from "react";

const MedalForm = ({ countries, setCountries }) => {
  const resetForm = () => {
    setCountryName("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  /** 새로운 국가 추가 */
  const addNewCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    if (countries.some((country) => country.countryName === countryName)) {
      return alert("이미 등록된 국가입니다.");
    }
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");
    }

    const newCountry = {
      id: crypto.randomUUID(),
      countryName: countryName,
      goldMedal: parseInt(goldMedal),
      silverMedal: parseInt(silverMedal),
      bronzeMedal: parseInt(bronzeMedal),
    };
    setCountries([...countries, newCountry]);
    resetForm();
  };

  /** 국가 업데이트 */
  const updateCountry = (e) => {
    e.preventDefault();
    if (!countryName) return alert("국가를 입력해주세요.");
    if (countries.some((country) => country.countryName !== countryName)) {
      return alert("등록되지 않은 국가입니다.");
    }
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      return alert("메달은 0개 이상부터 등록할 수 있습니다.");
    }

    const updatedCountries = countries.map((country) => {
      if (country.countryName === countryName) {
        return {
          id: crypto.randomUUID(),
          countryName: countryName,
          goldMedal: parseInt(goldMedal),
          silverMedal: parseInt(silverMedal),
          bronzeMedal: parseInt(bronzeMedal),
        };
      } else {
        return country;
      }
    });
    setCountries(updatedCountries);
    resetForm();
  };

  return (
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
              value={countryName}
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
              value={goldMedal}
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
              value={silverMedal}
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
              value={bronzeMedal}
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
    </>
  );
};

export default MedalForm;
