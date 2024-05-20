import "../styles/CreateRecipe.css"
import CreateRecipeButtons from "../CreateRecipeButtons";

function CreateRecipe() {
    return (
        <div className="recipe-container">
          <p>Create Recipe</p>
          <p>Cooking method</p>
          <CreateRecipeButtons/>  
        <p> Cooking time</p>
        
        <p>Servings</p>
{/*         <div className="square"></div>
 */}        <button className="create-button">Create Recipe</button>
      </div>
  )
}


export default CreateRecipe;