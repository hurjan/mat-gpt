import React, { useState } from 'react';
import "./styles/Buttons.css";

function DietButtons() {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (diet) => {
    setActiveButtons(prevState => {
      if (prevState.includes(diet)) {
        return prevState.filter(item => item !== diet);
      } else {
        return [...prevState, diet];
      }
    });
  };

  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button
          className={`dietButton ${activeButtons.includes('Vegan') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Vegan')}
        >
          <div className="image-container">
            <img src={'/images/vegan.png'} alt="Vegan image" />
          </div>
          <span className="button-text">Vegan</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${activeButtons.includes('Vego') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Vego')}
        >
          <div className="image-container">
            <img src={'/images/salad.png'} alt="Vego image" />
          </div>
          <span className="button-text">Vego</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${activeButtons.includes('None') ? 'active' : ''}`}
          onClick={() => handleButtonClick('None')}
        >
          <div className="image-container">
            <img src={'/images/null.png'} alt="None image" />
          </div>
          <span className="button-text">None</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${activeButtons.includes('Foodmap') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Foodmap')}
        >
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
