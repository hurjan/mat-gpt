
import DietButtons from "../DietButtons"
import "../styles/Diet.css"


function Diet() {
  return (
    <div className="dietContainer">
      <p>Do you have any special diet ?</p>
       <DietButtons/>  
      <a href="/CreateRecipe"><button className="nextButton">Next</button></a>
    </div>
  );
}

export default Diet;
