import React, { useState } from 'react';
import '../components/styles/Buttons.css';

function AllergiesButtons() {
  const [activeAllergies, setActiveAllergies] = useState([]);

  const handleClick = (allergy) => {
    setActiveAllergies(prevState => {
      if (prevState.includes(allergy)) {
        return prevState.filter(item => item !== allergy);
      } else {
        return [...prevState, allergy];
      }
    });
  };

  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('Lactose') ? 'active' : ''}`}
          onClick={() => handleClick('Lactose')}
        >
          <img src={'/images/milk.png'} alt="Lactose image" />
          <span className="button-text">Lactose</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('Egg') ? 'active' : ''}`}
          onClick={() => handleClick('Egg')}
        >
          <img src={'/images/egg.png'} alt="Egg image" />
          <span className="button-text">Egg</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('Nuts') ? 'active' : ''}`}
          onClick={() => handleClick('Nuts')}
        >
          <img src={'/images/nuts.png'} alt="Nuts image" />
          <span className="button-text">Nuts</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('Gluten') ? 'active' : ''}`}
          onClick={() => handleClick('Gluten')}
        >
          <img src={'/images/glutens.png'} alt="Gluten image" />
          <span className="button-text">Gluten</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('SeaFood') ? 'active' : ''}`}
          onClick={() => handleClick('SeaFood')}
        >
          <img src={'/images/shrimp.png'} alt="SeaFood image" />
          <span className="button-text">SeaFood</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${activeAllergies.includes('Nothing') ? 'active' : ''}`}
          onClick={() => handleClick('Nothing')}
        >
          <img src={'/images/null.png'} alt="Nothing image" />
          <span className="button-text">Nothing</span>
        </button>
      </div>
    </div>
  );
}

export default AllergiesButtons;
