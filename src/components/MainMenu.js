import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <ul className="nav justify-content-center mb-5">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favoritos">
          Favoritos
        </Link>
      </li>
    </ul>
  );
}
