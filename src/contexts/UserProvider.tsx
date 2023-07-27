import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

type AppProps = {
  children: React.ReactNode;
};

type Value = {
  user: any;
  error: any;
  signInWithGoogle: () => void;
  signOutFromApp: () => void;
  signInWithEmail: (email: string, password: string) => void;
  registerUser: (email: string, password: string) => void;
};

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const UserContext = createContext<Value | null>(null);

const UserProvider = ({ children }: AppProps) => {
  const [user, setUser] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, []);

  const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error));
  };

  const signInWithEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signOutFromApp = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };
  const value: Value = {
    user,
    error,
    signInWithGoogle,
    signOutFromApp,
    signInWithEmail,
    registerUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
