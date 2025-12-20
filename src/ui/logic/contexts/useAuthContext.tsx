import React from "react";

export type AuthState = {
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}


export const AuthContext = React.createContext<AuthState>({isAuth: false, setIsAuth: () => {}});

export const AuthContextProvider = ({children, value} : {children: any, value : AuthState}) => {
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}