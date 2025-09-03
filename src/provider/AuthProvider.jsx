import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { auth } from '../firebase/firebase.inti';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        loading,
        signUpUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;