import React, { useState } from "react";

export type AuthState = {
    isAuthenticated: boolean,
    setIsAuthenticated: (value: boolean) => void,
}


export const AuthContext = React.createContext<AuthState>({isAuthenticated: false, setIsAuthenticated: () => {}});

export const AuthContextProvider = ({children} : {children: any}) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            setIsAuthenticated: (value) => setIsAuthenticated(value),
        }}>
            {children}
        </AuthContext.Provider>
    );
}