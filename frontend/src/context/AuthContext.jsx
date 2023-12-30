import { createContext } from 'react';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { db } from '../firebase.config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { userId } = useAuthStatus();
    function updateLastLogin() {
        setDoc(
            doc(db, 'last-login', userId),
            { previous: serverTimestamp() },
            { merge: true }
        );
    }

    return (
        <AuthContext.Provider value={{ updateLastLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
