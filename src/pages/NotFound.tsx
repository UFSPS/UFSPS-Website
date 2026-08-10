import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => (
  <main className="notfound-main container">
    <p className="kicker">404 / Signal not found</p>
    <h1>This address does not resolve.</h1>
    <p className="lede notfound-lede">
      There is no page at this path. It may have moved, or the link may be mistyped.
    </p>
    <Link to="/" className="btn btn--accent notfound-home">Return to front page →</Link>
  </main>
);

export default NotFound;
