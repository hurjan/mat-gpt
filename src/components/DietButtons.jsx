
import "../components/styles/Buttons.css"
import React from 'react';

function DietButtons({ onButtonClick }) {
  const handleButtonClick = (text) => {
    onButtonClick(text); // Anropa funktionen som hanterar knapptryck och skicka med texten
  };

  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button className="dietButton" onClick={() => handleButtonClick('Vegan')}>
          <div className="image-container">
            <img src={'/images/vegan.png'} alt="Vego image" />
          </div>
          <span className="button-text">Vegan</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton" onClick={() => handleButtonClick('Vego')}>
          <div className="image-container">
            <img src={'/images/salad.png'} alt="Vegan image" />
          </div>
          <span className="button-text">Vego</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton" onClick={() => handleButtonClick('None')}>
        <div className="image-container">
            <img src={'/images/null.png'} alt="Vegan image" />
          </div>
          <span className="button-text">None</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton" onClick={() => handleButtonClick('Foodmap')}>
          <div className="image-container">
            <img src={'/images/checklist.png'} alt="Foodmap image" />
          </div>
          <span className="button-text">Foodmap</span>
        </button>
      </div>
    </div>
  );
}

export default DietButtons;

