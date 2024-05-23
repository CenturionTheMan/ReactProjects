import logo_img from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { SignupModal, LoginModal } from "../Components/AuthModals";
import React, { useState } from "react";
import { logout } from "../data/UserService";

function Navigation() {
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    await logout();
    setUserIsLoggedIn(false);
  };

  return (
    <div className="Navigation">
      <nav className="fixed-navigation">
        <Link to="/">
          <img className="logo" src={logo_img} />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <a class="nav-link" href="#">
                Home
              </a>
            </Link>
          </li>
          <li>
            <a className="nav-link" href="#browse">
              Browse
            </a>
          </li>
          <li>
            <a className="nav-link" href="#rent">
              Rent with us
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#"
              onClick={() => setSignupModalIsOpen(true)}
            >
              Sign up
            </a>
          </li>
          <button
            className="button primary"
            onClick={() => {
              isUserLoggedIn ? handleLogout() : setLoginModalIsOpen(true);
            }}
          >
            {isUserLoggedIn ? "Log out" : "Log in"}
          </button>
        </ul>
        <button className="button primary hidden">Menu</button>
      </nav>

      <SignupModal
        modalIsOpen={signupModalIsOpen}
        setModalIsOpen={setSignupModalIsOpen}
      />

      <LoginModal
        modalIsOpen={loginModalIsOpen}
        setModalIsOpen={setLoginModalIsOpen}
        setUserIsLoggedIn={setUserIsLoggedIn}
      />
    </div>
  );
}

export default Navigation;
