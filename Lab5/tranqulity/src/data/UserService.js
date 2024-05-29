import { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginGogle = async (navigate) => {
  const userCredentials = await signInWithPopup(auth, googleProvider);
  if (userCredentials.user) navigate("/");
};

export const logout = async () => {
  signOut(auth);
};

export const useUser = () => {
  const [user, setUser] = useState(auth?.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  return user;
};

export const loginDefault = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    throw error;
  }
};

export async function signupDefault(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
