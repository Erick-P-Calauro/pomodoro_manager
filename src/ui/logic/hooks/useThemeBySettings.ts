import { useEffect } from "react";
import { Settings } from "../../../data/types";
import chroma from "chroma-js"; // Biblioteca para manipulação de cor

export const useThemeBySettings = (settings: Settings) => {
  useEffect(() => {
      
    const { theme } = settings;
    const { productivity, short, long } = theme;

    // Cores Primárias

    document.documentElement.style.setProperty("--produtividade", productivity)
    document.documentElement.style.setProperty("--descansoCurto", short);
    document.documentElement.style.setProperty("--descansoLongo", long);
    
    // Cores Secundárias

    document.documentElement.style.setProperty("--produtividade2", chroma(productivity).darken(0.4))
    document.documentElement.style.setProperty("--descansoCurto2", chroma(short).darken(0.4))
    document.documentElement.style.setProperty("--descansoLongo2", chroma(long).darken(0.4))
  
  }, [settings])
}