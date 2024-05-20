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
          <img src={'/images/milk.png'} alt="Lactose image" />
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
        <img src={'/images/nuts.png'} alt="nuts image" />
          <span className="button-text">Nuts</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Gluten')}>
          <img src={'/images/glutens.png'} alt="Gluten image" />
          <span className="button-text">Gluten</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('SeaFood')}>
        <img src={'/images/shrimp.png'} alt="shrimp image" />
          <span className="button-text">SeaFood</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Nothing')}>
        <img src={'/images/null.png'} alt="null image" />
          <span className="button-text">Nothing</span>
        </button>
      </div>
    </div>
  );
}

export default AllergiesButtons;
