import "../styles/LandingPage.css"
import "../styles/Buttons.css"
import {Link} from "react-router-dom";


function LandingPage() {
    const pageStyle = {
      background: "url('/images/bg-desktop.png') center/cover",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Set the height if necessary
      width: '100vw' // Set the width if necessary
    };
  
    return (
      <div style={pageStyle}>
        {/* Content */}
      </div>
    );
  }
  
export default LandingPage;
