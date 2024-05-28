import { useState, useEffect } from 'react';
import response from '../response.json';

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Set the recipe data and image URL from the mock response
    setRecipe(response.recipe);
    setImageUrl(response.imageUrl);
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="generated-recipe">
      <h1>{recipe.title}</h1>
      <div className="image-container">
        <img src={imageUrl} alt={recipe.title} />
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
          {recipe.instructions.split(/\.\s(?=\d+\.)/).map((instruction, index) => (
            <li key={index}>{instruction.trim()}</li>
          ))}
        </ol>
      </div>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  );
}

export default Recipe;
