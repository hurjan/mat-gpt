import AllergiesButtons from "../AllergiesButtons";

import "../styles/Diet.css"


function Allergies() {
  return (
    <div className="dietContainer">
      <p>Do you have any allergy /
        <br /> something you don't like?</p>
       <AllergiesButtons/>  
      <a href="/CreateRecipe"><button className="nextButton">Next</button></a>
    </div>
  );
}

export default Allergies;
