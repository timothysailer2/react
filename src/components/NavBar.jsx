import "./NavBar.css"

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand" to="/">My Store</Link>

        <div>
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/catalog">Catalog</Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;