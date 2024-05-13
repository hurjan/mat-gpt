
import DietButtons from "../DietButtons"
import "../styles/Diet.css"

import React, { useState } from 'react';


function Diet() {
  const [selectedDiets, setSelectedDiets] = useState([]);

  const handleButtonClick = (diet) => {
    if (selectedDiets.includes(diet)) {
      setSelectedDiets(selectedDiets.filter(item => item !== diet));
    } else {
      setSelectedDiets([...selectedDiets, diet]);
    }
  };

  return (
    <>
      <a href="/"><button className="ArrowButton">&lt;</button></a>
      <div className="dietContainer">
        <p>Do you have any special diets?</p>
        <div className="selectedContainer">
          {selectedDiets.map((diet, index) => (
            <p key={index} className="selectedDiet">{diet}</p>
          ))}
        </div>
        <DietButtons onButtonClick={handleButtonClick} />
        <a href="/Allergies"><button className="nextButton">Next</button></a>
      </div>
    </>
  );
}

export default Diet;
