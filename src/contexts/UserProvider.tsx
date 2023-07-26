import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface AppProps {
  children: ReactJSXElement;
}

interface Value {
  user: object;
  error: object;
  signInWithGoogle: () => void;
  signOutFromApp: () => void;
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const UserContext = createContext({});

const UserProvider = ({ children }: AppProps) => {
  const [user, setUser] = React.useState<any>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [user]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error));
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
  const value: Value = { user, error, signInWithGoogle, signOutFromApp };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
