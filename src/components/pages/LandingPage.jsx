import "../styles/LandingPage.css"

function LandingPage() {
    return (
        <div className="container">
            <h1 className="heading">Chefbot</h1>
            <div className="button-group">
                <button className="button">Create Recipe</button>
                <button className="button">Log In</button>
            </div>
        </div>
    );
}

export default LandingPage;
