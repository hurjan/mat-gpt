
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
  const [loadingImage, setLoadingImage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Define GIFs array
  const gifs = ['snurr1.gif', 'snurr2.gif', 'snurr3.gif', 'snurr4.gif', 'snurr5.gif', 'snurr6.gif', 'snurr7.gif'];

  // Function to select a random GIF
  const selectRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return `../../images/${gifs[randomIndex]}`;
  };

  const fetchRecipe = async () => {
    if (!query || !userId || !cookingTime || !servings) {
      setError("All parameters must be provided.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setLoadingImage(selectRandomGif()); // Set random GIF each time fetching starts
    const queryString = `query=${encodeURIComponent(query)}&userId=${encodeURIComponent(userId)}&cookingTime=${encodeURIComponent(cookingTime)}&servings=${encodeURIComponent(servings)}`;
    const url = `https://localhost:7251/Recipe/GenerateRecipe?${queryString}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Await the response.json() call

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
    // Only run fetchRecipe on initial render and when dependencies change
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
      {isLoading && (
        <div className="loading-container">
          <p>Generating, please wait...</p>
          <img src="../../images/Group33.png" alt="Decorative" style={{
            opacity: '0.4',
            position: 'absolute',
            zIndex: '-1',
            top: '20%',
            left: '48%',
            marginTop: '-5em',
            transform: 'translateX(-50%)', // Center the image horizontally
            minWidth: '60vh', // 50% of the viewport width
            height: 'auto', // Auto height to maintain aspect ratio
            objectFit: 'cover',
            filter: 'blur(6px)' // Retaining the blur effect
          }} />
          <img src={loadingImage} alt="Loading..." />
        </div>
      )}
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
            <div id="ingredients-box">
              <ul>
                {recipe.ingredients.split(', ').map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
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
      <button className="recipe-button" onClick={handleRegenerate}>Regenerate</button>
      <button className="recipe-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Recipe;
