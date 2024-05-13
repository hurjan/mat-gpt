import React from 'react';
import '../components/styles/Buttons.css';

function AllergiesButtons({ onAllergySelect }) {
  // Funktion för att hantera när en knapp klickas och skicka tillbaka den valda allergin
  const handleClick = (allergy) => {
    onAllergySelect(allergy);
  };

  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Lactose')}>
          <img src={'/images/lactose.png'} alt="Lactose image" />
          <span className="button-text">Lactose</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Egg')}>
          <img src={'/images/egg.png'} alt="Egg image" />
          <span className="button-text">Egg</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Nuts')}>
          <span className="button-text">Nuts</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Gluten')}>
          <img src={'/images/gluten.png'} alt="Gluten image" />
          <span className="button-text">Gluten</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('SeaFood')}>
        
          <span className="button-text">SeaFood</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Nothing')}>
          <span className="button-text">Nothing</span>
        </button>
      </div>
    </div>
  );
}

export default AllergiesButtons;
