import { createContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [loginHasBeenUpdated, setLoginHasBeenUpdated] = useState(false);

    return (
        <SettingsContext.Provider
            value={{
                loginHasBeenUpdated,
                setLoginHasBeenUpdated,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;
