import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Allergies from "./components/pages/Allergies"
import Dietary from "./components/pages/Dietary"
import Ingredients from "./components/pages/Ingredients"
import LandingPage from "./components/pages/LandingPage"
import Recipe from "./components/pages/Recipe"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dietary" element={<Dietary />} />
          <Route path="/allergies" element={<Allergies />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
