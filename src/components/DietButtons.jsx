
import "../components/styles/Buttons.css"

function DietButtons() {
  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button className="dietButton">
          <div className="image-container">
            <img src={'/images/avocado.png'} alt="Vego image" />
          </div>
          <span className="button-text">Vegan</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton">
          <div className="image-container">
            <img src={'/images/carrot.png'} alt="Vegan image" />
          </div>
          <span className="button-text">Vego</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton">
          <span className="button-text">None</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="dietButton">
          <div className="image-container">
            <img src={'/images/fodmap.png'} alt="Foodmap image" />
          </div>
          <span className="button-text">Foodmap</span>
        </button>
      </div>
    </div>
  );
}

export default DietButtons;
