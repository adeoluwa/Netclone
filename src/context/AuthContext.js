import { createContext, useContext, useEffect, useState } from 'react';

import { auth, db } from '../firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  /**
   * It creates a user with the email and password provided, and then creates a document in the
   * database with the user's email as the document ID, and an empty array as the value for the
   * savedShows property
   * @param email - the email of the user
   * @param password - The password for the new account.
   */
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      savedShows:[]
    });
  }

  /**
   * It logs in a user with the given email and password.
   * @param email - The email address of the user.
   * @param password - The user's password.
   * @returns The function signInWithEmailAndPassword is being returned.
   */
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  /**
   * It returns a promise that resolves when the user is signed out.
   * @returns The function signOut() is being returned.
   */
  function logOut() {
    return signOut(auth);
  }

  /* A hook that is listening for changes in the auth state. */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  /* Returning the AuthContext.Provider with the value of the signUp, logIn, logOut, and user. */
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
