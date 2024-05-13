import "../styles/LandingPage.css"
import "../styles/Buttons.css"


function LandingPage() {
    return (
        <div className="container">
            <img className="heading" src="/images/chefbotLogo.png" alt="" />
            <div className="landingButton-group">
               <a href="/Diet"><button className="landingButton1">Create Recipe</button></a> 
                <button className="landingButton2">Log In</button>
            </div>
        </div>
    );
}

export default LandingPage;
