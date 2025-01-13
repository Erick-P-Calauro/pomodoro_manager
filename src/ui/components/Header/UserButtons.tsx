import React, { useContext } from "react";
import { HeaderButton } from "./HeaderButton.tsx";
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";

export const UserButtons = ({ openSettingsModal }) => {
    
    const { colors } = useContext(ThemeContext);
    
    return (
        <div className="flex items-center gap-5">
            <HeaderButton style={{backgroundColor: colors.main}}>
                <img src="/assets/insert_chart.svg" alt="report icon" />

                <div className="items-center sm-mobile:hidden lg-mobile:flex">
                    <BodyExtraSmall text="Informações" style={{color: "var(--normal)"}} />
                </div>
            </HeaderButton>

            <HeaderButton style={{backgroundColor: colors.main}} trigger={() => openSettingsModal(true)}>
                <img src="/assets/settings.svg" alt="general settings icon" />
                
                <div className="items-center sm-mobile:hidden lg-mobile:flex">
                    <BodyExtraSmall text="Configurações" style={{color: ("var(--normal")}} />
                </div>
            </HeaderButton>
        </div>
    )
}