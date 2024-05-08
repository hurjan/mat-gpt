import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Allergies from "./components/pages/Allergies"
import Dietary from "./components/pages/Dietary"
import Ingredients from "./components/pages/Ingredients"
import LandingPage from "./components/pages/LandingPage"
import CreateRecipe from "./components/pages/CreateRecipe"
import SavedRecipe from "./components/pages/SavedRecipe"
import Navbar from "./components/navbar.jsx"
import Groceries from "./components/pages/Groceries"

function App() {


    return (
      <>
        <BrowserRouter>
          <Header />
          <Navbar />
          <div style={{  marginTop: '1em' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dietary" element={<Dietary />} />
            <Route path="/allergies" element={<Allergies />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/CreateRecipe" element={<CreateRecipe />} />
            <Route path="/SavedRecipe" element={<SavedRecipe />} />
            <Route path="/groceries" element={<Groceries />} />

          </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }

  export default App
