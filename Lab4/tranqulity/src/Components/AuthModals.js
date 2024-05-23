import React, { useState } from "react";
import Modal from "react-modal";
import { signupDefault, loginDefault, loginGogle } from "../data/UserService";
import { useNavigate } from "react-router-dom";
import { SetHotelsData } from "../Sections/BrowseSection";

Modal.setAppElement("#root");

export function LoginModal({ modalIsOpen, setModalIsOpen, setUserIsLoggedIn }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginDefault(loginEmail, loginPassword);
      setUserIsLoggedIn(true);
      setModalIsOpen(false);
      console.log("User logged in");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGogle(navigate);
      setUserIsLoggedIn(true);
      setModalIsOpen(false);
      console.log("User logged in with Google");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="auth-modal"
    >
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="button primary">
          Log in
        </button>

        <button
          onClick={handleGoogleLogin}
          className="google-login-button button primary"
        >
          Login with Google
        </button>
      </form>
    </Modal>
  );
}

export function SignupModal({ modalIsOpen, setModalIsOpen }) {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signupDefault(signupEmail, signupPassword);
      setModalIsOpen(false);
      console.log("User signed up");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="auth-modal"
    >
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="button primary">
          Sign up
        </button>
      </form>
    </Modal>
  );
}
