import { Provider } from 'react-redux';
import { useState } from "react";
import fakeAuthProvider from "./auth";
import AuthContext from './authConfig';

interface AuthProviderProps {
    children: Record<string, any>;
  }
  
  interface AuthContextValue {
    user: any;
    signin: (newUser: any, callback: () => void) => void;
    signout: (callback: () => void) => void;
  }
  
  function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<any>(null);
  
    const signin = (newUser: any, callback: () => void) => {
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    const signout = (callback: () => void) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    const value: AuthContextValue = { user, signin, signout };
  
    
    return <AuthContext value = {value}> {children} </AuthContext> 
  }

  export default AuthProvider;
  