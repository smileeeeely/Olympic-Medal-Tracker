import React from "react";

/** 국가 리스트 렌더링 */
const RenderList = ({ inputData, deleteCountry}) => {
  return (
    <div className="country-list-style">
      <div> {inputData.countryName} </div>
      <div> {inputData.goldMedal}</div>
      <div>{inputData.silverMedal}</div>
      <div>{inputData.bronzeMedal}</div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteCountry(inputData.countryName)}
      >
        삭제
      </button>
    </div>
  );
};

export default RenderList;
