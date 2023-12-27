import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase.config';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const auth = getAuth(app);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setUserId(user.uid);
            } else {
                setLoggedIn(false);
            }
            setCheckingStatus(false);
        });
    });

    return { loggedIn, checkingStatus, userId };
};
