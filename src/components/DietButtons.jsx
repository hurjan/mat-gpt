import { useUserPreferences } from "./contexts/UserPreferencesContext.jsx" ; 
import "./styles/Buttons.css";

function DietButtons() {
  const { diet, addOrRemove } = useUserPreferences();

  const handleButtonClick = (item) => {
    addOrRemove(diet, item);
  };


  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('Vegan') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Vegan')}
        >
          <div className="image-container">
            <img src={'/images/vegan.png'} alt="Vegan image" />
          </div>
          <span className="button-text">Vegan</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('Vego') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Vego')}
        >
          <div className="image-container">
            <img src={'/images/salad.png'} alt="Vego image" />
          </div>
          <span className="button-text">Vego</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('None') ? 'active' : ''}`}
          onClick={() => handleButtonClick('None')}
        >
          <div className="image-container">
            <img src={'/images/null.png'} alt="None image" />
          </div>
          <span className="button-text">None</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('Foodmap') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Foodmap')}
        >
          <div className="image-container">
            <img src={'/images/checklist.png'} alt="Foodmap image" />
          </div>
          <span className="button-text">Foodmap</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('Halal') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Halal')}
        >
          <div className="image-container">
            <img src={'/images/halal.png'} alt="Halal image" />
          </div>
          <span className="button-text">Halal</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`dietButton ${diet.includes('Keto') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Keto')}
        >
          <div className="image-container">
            <img src={'/images/keto.png'} alt="Keto image" />
          </div>
          <span className="button-text">Keto</span>
        </button>
      </div>
    </div>
  );
}

export default DietButtons;
