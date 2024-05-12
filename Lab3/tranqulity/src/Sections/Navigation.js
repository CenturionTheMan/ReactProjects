import logo_img from "../Assets/logo.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <nav class="fixed-navigation">
        <img class="logo" src={logo_img} />
        <ul class="nav-links">
          <li>
            <Link to="/">
              <a class="nav-link" href="#">
                Home
              </a>
            </Link>
          </li>
          <li>
            <a class="nav-link" href="#browse">
              Browse
            </a>
          </li>
          <li>
            <a class="nav-link" href="#rent">
              Rent with us
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              Sign up
            </a>
          </li>
          <button class="button primary">Log in</button>
        </ul>
        <button class="button primary hidden">Menu</button>
      </nav>
    </div>
  );
}

export default Navigation;
