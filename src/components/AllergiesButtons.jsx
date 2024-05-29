import { useUserPreferences } from '../context/UserPreferencesContext'; 
import "./styles/Buttons.css";

function AllergiesButtons() {
  const { allergies, setAllergies, addOrRemove } = useUserPreferences();

  const handleButtonClick = (item) => {
    addOrRemove(allergies, item, setAllergies); 
  };


  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Gluten') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Gluten')}
        >
          <div className="image-container">
            <img src={'/images/glutens.png'} alt="Gluten image" />
          </div>
          <span className="button-text">Gluten</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Nuts') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Nuts')}
        >
          <div className="image-container">
            <img src={'/images/nuts.png'} alt="Nuts image" />
          </div>
          <span className="button-text">Nuts</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Dairy') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Dairy')}
        >
          <div className="image-container">
            <img src={'/images/milk.png'} alt="Dairy image" />
          </div>
          <span className="button-text">Dairy</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Eggs') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Eggs')}
        >
          <div className="image-container">
            <img src={'/images/egg.png'} alt="Egg image" />
          </div>
          <span className="button-text">Eggs</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Seafood') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Seafood')}
        >
          <div className="image-container">
            <img src={'/images/shrimp.png'} alt="Seafood image" />
          </div>
          <span className="button-text">Seafood</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button
          className={`allergieButton ${allergies.includes('Soy') ? 'active' : ''}`}
          onClick={() => handleButtonClick('Soy')}
        >
          <div className="image-container">
            <img src={'/images/null.png'} alt="None image" />
          </div>
          <span className="button-text">None</span>
        </button>
      </div>
    </div>
  );
}

export default AllergiesButtons;
