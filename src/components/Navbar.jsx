// Plain text navigation only: the words Home, About and Contact.
// The links are centered; there are no icons, classes or styling on them.
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-links" aria-label="Main navigation">
      <Link to="/">Home</Link>{" "}
      <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
