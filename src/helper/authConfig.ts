import React, { useContext, createContext } from 'react';

const AuthContext = createContext<unknown>(null).Provider;

export default AuthContext;