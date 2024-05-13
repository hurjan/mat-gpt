
import "../components/styles/Buttons.css"

function DietButtons() {
  return (
    <div className="button-container">
   <button className="dietButton">Vegan <img src={ '/images/avocado.png'} alt="Vego image" /></button>
      <button className="dietButton">Vego <img src={ '/images/carrot.png'} alt="Vegan image" /></button>
      <button className="dietButton">None</button>
      <button className="dietButton">Foodmap <img src={ '/images/fodmap.png'} alt="Foodmap image" /></button>
    </div>
  );
}

export default DietButtons;
