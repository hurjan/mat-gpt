import React from 'react';
import DietButtons from "../DietButtons";
import AllergiesButtons from "../AllergiesButtons";
import "../styles/Diet.css";

function Diet() {
  return (
    <div className="dietContainer">
      <a href="/"><button className="ArrowButton">&lt;</button></a>
      <p>Do you have any special diet?</p>
      <DietButtons/>
      <p>Do you have any allergy / <br /> something you don't like?</p>
      <AllergiesButtons/>
      <a href="/CreateRecipe"><button className="nextButton">Next</button></a>
    </div>
  );
}

export default Diet;

