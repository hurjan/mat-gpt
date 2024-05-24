import React, { useState } from 'react';
import "../styles/CreateRecipe.css";
import CreateRecipeButtons from "../CreateRecipeButtons";

function CreateRecipe() {
  const [showCookingMethods, setShowCookingMethods] = useState(false);
  const [cookingTime, setCookingTime] = useState('15');
  const [servings, setServings] = useState('1');

  const toggleCookingMethods = () => {
    setShowCookingMethods(prevState => !prevState);
  };

  const handleCookingTimeChange = (event) => {
    setCookingTime(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  return (
    <div className="recipe-container">
      <p>Create Recipe</p>
      <br />
      <p2 className="cooking-method" onClick={toggleCookingMethods}>
        Cooking method {showCookingMethods ? '▲' : '▼'}
      </p2>
      <div className={`create-recipe-buttons-wrapper ${showCookingMethods ? 'show' : ''}`}>
        <CreateRecipeButtons />
      </div>
      <p2 className="cooking-time">Cooking time</p2>
      <select 
        value={cookingTime} 
        onChange={handleCookingTimeChange}
        className="cooking-time-dropdown"
      >
        <option value="15">10 minutes</option>
        <option value="30">30 minutes</option>
        <option value="60">60+ minutes</option>
      </select>
      <br />
      <p2>Servings</p2>
      <select 
        value={servings} 
        onChange={handleServingsChange}
        className="servings-dropdown"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <br />
      <a href="/GeneratedRecipe"><button className="create-button">Generate</button></a>
    </div>
  );
}

export default CreateRecipe;
