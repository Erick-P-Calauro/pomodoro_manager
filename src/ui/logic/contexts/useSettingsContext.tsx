import React, { SetStateAction } from "react";
import { Settings } from "../../../data/types";

export type SettingsStateType = {
    settings : Settings,
    changeSettings: React.Dispatch<SetStateAction<Settings>>
}

const SettingsState: SettingsStateType = {
    settings: {
        timer: {
            productivity: 30,
            short: 5,
            long: 10 
        },
        
        theme: {
            productivity: "",
            short: "",
            long: ""
        }, 
    },

    changeSettings: (e) => {}
}
export const SettingsContext = React.createContext(SettingsState);

export const SettingsProvider = ({children, value} : any) => {
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
}