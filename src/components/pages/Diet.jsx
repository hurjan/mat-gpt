
import DietButtons from "../DietButtons"
import "../styles/Diet.css"


function Diet() {
  return (
    <>
    <a href="/"><button className="ArrowButton">&lt;</button></a>
    <div className="dietContainer">
      <p>Do you have any special diet ?</p>
       <DietButtons/>  
      <a href="/Allergies"><button className="nextButton">Next</button></a>
    </div>
    </>
  );
}

export default Diet;
