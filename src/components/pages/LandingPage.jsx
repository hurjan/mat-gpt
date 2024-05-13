import "../styles/LandingPage.css"


function LandingPage() {
    return (
        <div className="container">
            <img className="heading" src="/images/chefbotLogo.png" alt="" />
            <div className="button-group">
               <a href="/Diet"><button className="button">Create Recipe</button></a> 
                <button className="button">Log In</button>
            </div>
        </div>
    );
}

export default LandingPage;
