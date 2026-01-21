import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">InventoryApp</Link>

      <div>
<Link className="nav-link d-inline-block text-white mx-3" to="/">Login</Link>
<Link className="nav-link d-inline-block text-white mx-3" to="/about">About</Link>
<Link className="nav-link d-inline-block text-white mx-3" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;