import React from 'react';
import '../components/styles/Buttons.css';

function CreateRecipeButtons({ onCookingMethodSelect }) {
  // Funktion för att hantera när en knapp klickas och skicka tillbaka den valda Cooking method
  const handleClick = (CookingMethod) => {
    onCookingMethodselect(CookingMethod)
  };

  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Oven')}>
          <img src={'/images/oven.png'} alt="Oven image" />
          <span className="button-text">oven</span>
        </button>
      </div>
      <div className="buttoncontent">
      <button className="allergieButton" onClick={() => handleClick('Stove')}>
          <img src={'/images/stove.png'} alt="Stove image" />
          <span className="button-text">stove</span>        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Micro')}>
        <img src={'/images/micro.png'} alt="Micro image" />
          <span className="button-text">microwave</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton" onClick={() => handleClick('Blender')}>
          <img src={'/images/blender.png'} alt="blender image" />
          <span className="button-text">blender</span>
        </button>
         </div>
    </div>
  );
}

export default CreateRecipeButtons;