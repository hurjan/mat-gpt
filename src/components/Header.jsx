import { useLocation } from "react-router-dom";
import "../components/styles/Header.css";

function Header() {
  const location = useLocation();

  // List of routes where the header should be hidden
  const hiddenRoutes = ["/"];

  // Check if the current route is in the hiddenRoutes array
  const isHidden = hiddenRoutes.includes(location.pathname);

  // Render the header only if it's not in the hiddenRoutes
  return (
    <div className={isHidden ? "hidden" : "headerbar"}>
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <p>ChefBot</p>
      </a>
    </div>
  );
}

export default Header;
