// Fallback page shown for any URL that does not match a defined route.
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <section className="hero">
        <h2 className="page__heading">Page Not Found</h2>
        <p className="page__lead">
          Sorry, the page you are looking for does not exist or has moved.
        </p>
        <Link className="button-link" to="/">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
