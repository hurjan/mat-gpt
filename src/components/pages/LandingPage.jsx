import "../styles/LandingPage.css"
import "../styles/Buttons.css"
import {Link} from "react-router-dom";


function LandingPage() {
    return (
        <div className="container">
            <img className="heading" src="/images/chefbotLogo.png" alt="" />
            <div className="landingButton-group">
               <a href="/Diet"><button className="landingButton1">Create Recipe</button></a> 
               <Link className="landingButton2" to="/login"> Login </Link>
            </div>
        </div>
    );
}

export default LandingPage;
