import React, { useState } from 'react';
import './styles/CreateRecipe.css';

function CreateRecipeButtons({ onCookingMethodSelect }) {
  const [activeMethods, setActiveMethods] = useState([]);

  const handleClick = (cookingMethod) => {
    setActiveMethods(prevState => {
      if (prevState.includes(cookingMethod)) {
        return prevState.filter(method => method !== cookingMethod);
      } else {
        return [...prevState, cookingMethod];
      }
    });
    onCookingMethodSelect(cookingMethod);
  };

  return (
    <div className="create-recipe-buttons">
      <button
        className={`allergieButton ${activeMethods.includes('Oven') ? 'active' : ''}`}
        onClick={() => handleClick('Oven')}
      >
        <img src={'/images/oven.png'} alt="Oven image" />
        <span className="button-text">Oven</span>
      </button>
      <button
        className={`allergieButton ${activeMethods.includes('Stove') ? 'active' : ''}`}
        onClick={() => handleClick('Stove')}
      >
        <img src={'/images/stove.png'} alt="Stove image" />
        <span className="button-text">Stove</span>
      </button>
      <button
        className={`allergieButton ${activeMethods.includes('Micro') ? 'active' : ''}`}
        onClick={() => handleClick('Micro')}
      >
        <img src={'/images/micro.png'} alt="Micro image" />
        <span className="button-text">Microwave</span>
      </button>
      <button
        className={`allergieButton ${activeMethods.includes('Blender') ? 'active' : ''}`}
        onClick={() => handleClick('Blender')}
      >
        <img src={'/images/blender.png'} alt="Blender image" />
        <span className="button-text">Blender</span>
      </button>
    </div>
  );
}

export default CreateRecipeButtons;
