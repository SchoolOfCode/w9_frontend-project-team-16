import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink className="home-page" to="/">
          Home
        </NavLink>
        <NavLink className="search-page" to="/search">
          Search
        </NavLink>
      </nav>
    </div>
  );
}
