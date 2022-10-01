import { createContext, ReactNode, useState } from 'react';

import * as authService from '../services/AuthService';
import { User } from '../types/User';

interface AuthContextData {
  user: User;
  signed: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User>(null);

  async function signIn() {
    const { user, token } = await authService.signIn();
    setUser(user);
  }

  function signOut() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
