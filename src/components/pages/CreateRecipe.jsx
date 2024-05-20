import "../styles/CreateRecipe.css"
import CreateRecipeButtons from "../CreateRecipeButtons";

function CreateRecipe() {
    return (
        <div className="recipe-container">
          <p>Create Recipe</p>
          <br />
          <p2>Cooking method</p2>
          <CreateRecipeButtons/>  
        <p2> Cooking time</p2>
        <br />
        <br />
        <p2>Servings</p2>
        <br />

<br />
        <button className="create-button">Generate</button>
      </div>
  )
}


export default CreateRecipe;