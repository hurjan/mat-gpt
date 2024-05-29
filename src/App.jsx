
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// eslint-disable-next-line no-unused-vars

import Header from "./components/Header";
import Navbar from "./components/navbar.jsx";
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

// import Recipe from './components/Recipe';
import { UserPreferencesProvider } from './components/context/UserPreferencesContext.jsx'; 


function App() {
  const location = useLocation(); // Get the current location
  const isLandingPage = location.pathname === '/'; // Check if it's the landing page

  return (

    <UserPreferencesProvider>
      <Router>
        <div className="App">
          {/* Header and Navbar always rendered */}
          <Header />
          <Navbar />
        <div className={`content ${isLandingPage ? "landing-background" : ""}`}>

          {/* Routes for different pages */}
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/diet" element={<Diet />} />
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
      </Router>
    </UserPreferencesProvider>

  );
}

export default App;
