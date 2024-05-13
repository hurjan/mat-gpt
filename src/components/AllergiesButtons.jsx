
import "../components/styles/Buttons.css"

function AllergiesButtons() {
  return (
    <div className="button-container">
      <div className="buttoncontent">
        <button className="allergieButton">
          <img src={'/images/lactose.png'} alt="Lactose image" />
          <span className="button-text">Lactose</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton">
          <img src={'/images/egg.png'} alt="Egg image" />
          <span className="button-text">Egg</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton">
          <span className="button-text">Nuts</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton">
          <img src={'/images/gluten.png'} alt="Gluten image" />
          <span className="button-text">Gluten</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton">
          <img src={'/images/gluten.png'} alt="Gluten image" />
          <span className="button-text">SeaFood</span>
        </button>
      </div>
      <div className="buttoncontent">
        <button className="allergieButton">
          
          <span className="button-text">Nothing</span>
        </button>
      </div>
    </div>
  );
}

export default AllergiesButtons;
