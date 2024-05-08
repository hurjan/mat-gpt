import "../styles/LandingPage.css"


function LandingPage() {
    return (
        <div className="container">
            <h1 className="heading">ChefBot</h1>
            <div className="button-group">
               <a href="/Diet"><button className="button">Create Recipe</button></a> 
                <button className="button">Log In</button>
            </div>
        </div>
    );
}

export default LandingPage;
