import React from "react";

const MedalForm = ({
  addNewCountry,
  updateCountry,
  setCountryName,
  setGoldMedal,
  setSilverMedal,
  setBronzeMedal,
  countryName,
}) => {
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
    </>
  );
};

export default MedalForm;
