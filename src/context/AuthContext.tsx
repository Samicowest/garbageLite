import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { auth } from "../firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface IUserAuthProviderProps {
  children: ReactNode;
}

interface IUserAuthContext {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const UserAuthContext = createContext<IUserAuthContext | undefined>(undefined);

export const UserAuthProvider: React.FC<IUserAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = (): IUserAuthContext => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within a UserAuthProvider");
  }
  return context;
};
