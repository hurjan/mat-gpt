import React, { useContext, useEffect, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import "./styles/GeneratedRecipe.css";

function Recipe() {
  const { queryParams } = useContext(RecipeContext);
  const { query, userId, cookingTime, servings } = queryParams;
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true);
      setError(null);
      const queryString = `query=${encodeURIComponent(query)}&userId=${encodeURIComponent(userId)}&cookingTime=${encodeURIComponent(cookingTime)}&servings=${encodeURIComponent(servings)}`;
      const url = `https://localhost:7251/Recipe/GenerateRecipe?${queryString}`;
  

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));


      try {
          const response = await fetch(url, {
              method: 'GET', // or 'POST'
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          });
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setRecipe(data.recipe);
      } catch (error) {
          console.error('Error fetching recipe:', error);
          setError(`Failed to fetch recipe: ${error.message}`);
      } finally {
          setIsLoading(false);
      }
    }

    if (query && userId && cookingTime && servings) {
      fetchRecipe();
    } else {
      setError("All parameters must be provided.");
      setIsLoading(false);
    }
  }, [query, userId, cookingTime, servings]);  // Ensure these are the correct dependencies

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div className="generated-recipe">
      <h1>{recipe.title}</h1>
      <div className="image-container">
        <img src={recipe.imageUrl || '/default-recipe.jpg'} alt={recipe.title} />
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
          {recipe.instructions.split('. ').map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  );
}

export default Recipe;  // This needs to be outside of your component function.
