import React, { useState } from 'react';
import AllergiesButtons from '../AllergiesButtons';
import "../styles/Buttons.css"


function Allergies() {
  // State för att hålla reda på de valda allergierna
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  // Funktion för att hantera när en allergi väljs
  const handleAllergySelection = (allergy) => {
    // Kontrollera om allergin redan är vald
    if (selectedAllergies.includes(allergy)) {
      // Om allergin redan är vald, ta bort den från listan
      setSelectedAllergies(selectedAllergies.filter(item => item !== allergy));
    } else {
      // Om allergin inte är vald, lägg till den i listan
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  return (
    <>
      <a href="/diet">
        <button className="ArrowButton">&lt;</button>
      </a>
      <div className="dietContainer">
        <p>
          Do you have any allergy /
          <br /> something you don't like?
        </p>
        {/* Visa valda allergier som taggar */}
        <div className="selectedContainer"> {/* Lägg till klassen för flex-layout */}
          {selectedAllergies.map((allergy, index) => (
            <div key={index} className="selectedDiet"> {/* Lägg till klassen för vald allergi */}
               {allergy}
            </div>
          ))}
        </div>
        <AllergiesButtons onAllergySelect={handleAllergySelection} />
        <a href="/CreateRecipe">
          <button className="nextButton">Next</button>
        </a>
      </div>
    </>
  );
}

export default Allergies;
