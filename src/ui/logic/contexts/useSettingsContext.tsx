import React, { useEffect, useState } from "react";
import { Settings } from "../../../data/dto.ts";
import { defaultSettings } from "../../../utils/settings.ts";
import chroma from "chroma-js";

export type SettingsStateType = {
    settings : Settings,
    changeSettings: (value: Settings) => void
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

    changeSettings: () => {}
}
export const SettingsContext = React.createContext(SettingsState);

export const SettingsProvider = ({children } : any) => {

    // Gerenciamento de Contextos
    const [settings, setSettings] = useState<Settings>(defaultSettings);

    // Efeito responsável por definir os temas com base nas configurações do usuário
    useEffect(() => {

        const { theme } = settings;
        const { productivity, short, long } = theme;

        // Cores Primárias
        document.documentElement.style.setProperty("--produtividade", productivity)
        document.documentElement.style.setProperty("--descansoCurto", short);
        document.documentElement.style.setProperty("--descansoLongo", long);
        
        // Cores Secundárias
        document.documentElement.style.setProperty("--produtividade2", String(chroma(productivity).darken(0.4)))
        document.documentElement.style.setProperty("--descansoCurto2", String(chroma(short).darken(0.4)))
        document.documentElement.style.setProperty("--descansoLongo2", String(chroma(long).darken(0.4)))
    
    }, [settings])

    return (
        <SettingsContext.Provider value={{
            settings: settings,
            changeSettings: (value: Settings) => setSettings(value)
        }}>
            {children}
        </SettingsContext.Provider>
    );
}