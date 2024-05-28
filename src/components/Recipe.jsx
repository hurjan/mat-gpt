import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import "./styles/GeneratedRecipe.css";

function Recipe() {
  const { queryParams } = useContext(RecipeContext);
  const { query, userId, cookingTime, servings } = queryParams;
  const [recipe, setRecipe] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchRecipe = async () => {
    if (!query || !userId || !cookingTime || !servings) {
      setError("All parameters must be provided.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    const queryString = `query=${encodeURIComponent(query)}&userId=${encodeURIComponent(userId)}&cookingTime=${encodeURIComponent(cookingTime)}&servings=${encodeURIComponent(servings)}`;
    const url = `https://localhost:7251/Recipe/GenerateRecipe?${queryString}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRecipe(data.recipe);
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setError(`Failed to fetch recipe: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [query, userId, cookingTime, servings]);

  const handleRegenerate = () => {
    fetchRecipe();
  };

  const handleGoBack = () => {
    navigate('/CreateRecipe');
  };

  const splitInstructions = (instructions) => {
    return instructions.split(/(?<=\.\s)(?=\d+\.)/).map((instr, index) => (
      <li key={index}>{instr.trim()}</li>
    ));
  };

  return (
    <div className="generated-recipe">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!recipe && !isLoading && !error && <div>No recipe found.</div>}
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <div className="image-container">
            <img src={imageUrl || '/images/recipetest.webp'} alt={recipe.title} />
          </div>
          <p>Ingredients</p>
          <div className="content-box">
            <ul>
              {recipe.ingredients.split(', ').map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <p>Instructions</p>
          <div className="content-box">
            <ol>
              {splitInstructions(recipe.instructions)}
            </ol>
          </div>
          <p>Cooking Time: {recipe.cookingTime} minutes</p>
        </>
      )}
      <button className="create-button" onClick={handleRegenerate}>Regenerate</button>
      <button className="create-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Recipe;
