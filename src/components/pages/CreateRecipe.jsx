import React, { useState, useContext } from 'react';
import "../styles/CreateRecipe.css";
import CreateRecipeButtons from "../CreateRecipeButtons";
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeContext';

function CreateRecipe() {
  const { setRecipeParams } = useContext(RecipeContext);
  const [showCookingMethods, setShowCookingMethods] = useState(false);
  const [cookingTime, setCookingTime] = useState('15');
  const [servings, setServings] = useState('1');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const toggleCookingMethods = () => {
    setShowCookingMethods(prevState => !prevState);
  };

  const handleCookingTimeChange = (event) => {
    setCookingTime(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleGenerate = () => {
    const params = {
      query,
      userId: '1', // Replace with actual user ID
      cookingTime,
      servings
    };

    // Set the context state
    setRecipeParams(params);

    // Save the params to sessionStorage (if needed)
    sessionStorage.setItem('recipeParams', JSON.stringify(params));

    // Navigate to GeneratedRecipe
    navigate('/GeneratedRecipe');
  };

  return (
    <div className="recipe-container">
      <p className="label create-recipe-title">Create Recipe</p>
      
      <div className='ingredients-input'>
        <label htmlFor="query-input" className="label">Ingredients</label>
        <textarea 
          id="query-input"
          value={query}
          onChange={handleQueryChange}
          className="query-input"
          placeholder="Write down your ingredients here"
          rows="4"
        />
      </div>

      <p className="cooking-method label" onClick={toggleCookingMethods}>
        Cooking method {showCookingMethods ? '▲' : '▼'}
      </p>
      <div className={`create-recipe-buttons-wrapper ${showCookingMethods ? 'show' : ''}`}>
        <CreateRecipeButtons />
      </div>

      <p className="cooking-time label">Cooking time</p>
      <select 
        value={cookingTime} 
        onChange={handleCookingTimeChange}
        className="cooking-time-dropdown"
      >
        <option value="15">10 minutes</option>
        <option value="30">30 minutes</option>
        <option value="60">60+ minutes</option>
      </select>

      <p className="label">Servings</p>
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

      <button className="create-button" onClick={handleGenerate}>Generate</button>
    </div>
  );
}


export default CreateRecipe;
