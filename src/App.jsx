import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/navbar.jsx";
import Allergies from "./components/pages/Allergies";
import Diet from "./components/pages/Diet";
import Ingredients from "./components/pages/Ingredients";
import LandingPage from "./components/pages/LandingPage";
import CreateRecipe from "./components/pages/CreateRecipe";
import SavedRecipe from "./components/pages/SavedRecipe";
import Groceries from "./components/pages/Groceries";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import GeneratedRecipe from "./components/pages/GeneratedRecipe";
import Recipe from "./components/Recipe.jsx";

function App() {
  const location = useLocation(); // Get the current location
  const isLandingPage = location.pathname === '/'; // Check if it's the landing page

  return (
      <div className="App">
        <Header />
        <Navbar />
        <div className={`content ${isLandingPage ? "landing-background" : ""}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/allergies" element={<Allergies />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/CreateRecipe" element={<CreateRecipe />} />
            <Route path="/GeneratedRecipe" element={<GeneratedRecipe />} />
            <Route path="/SavedRecipe" element={<SavedRecipe />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
