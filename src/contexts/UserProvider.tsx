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
  signInWithGoogle: () => Promise<boolean>;
  signOutFromApp: () => void;
  signInWithEmail: (email: string, password: string) => Promise<boolean>;
  registerUser: (email: string, password: string) => Promise<boolean>;
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

  const registerUser = async (email: string, password: string) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredentials?.user);
      return true;
    } catch (error) {
      setError(error);
      return false;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return true;
    } catch (error) {
      setError(error);
      return false;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      return true;
    } catch (error) {
      setError(error);
      return false;
    }
  };

  const signOutFromApp = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
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
