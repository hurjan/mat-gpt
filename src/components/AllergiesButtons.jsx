
import "../components/styles/Buttons.css"

function AllergiesButtons() {
    return (
      <div className="button-container">
        <button className="dietButton">Lactose <img src={ '/images/lactose.png'} alt="Lactose image" /> </button>
        <button className="dietButton">Egg <img src={ '/images/egg.png'} alt="Egg image" /></button>
        <button className="dietButton">Nuts </button>
        <button className="dietButton">Gluten <img src={ '/images/gluten.png'} alt="Gluten image" /></button>
      </div>
    );
  }
  
  export default AllergiesButtons;
  