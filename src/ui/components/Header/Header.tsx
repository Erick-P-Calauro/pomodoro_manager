import React, { useContext } from "react";
import { HeadlineLarge } from "../Typography/HeadlineLarge.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { ButtonHeader } from "./ButtonHeader.tsx";
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";

function Header() {

    const { colors } = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
                <img className="w-[60px] h-[60px]" src="/assets/pomodoro.png" alt="pomodoro icon"></img>
                <HeadlineLarge text="Pomodoro Manager" style={{color: "var(--normal)", maxWidth: "155px"}}/>
            </div>

            <div className="flex items-center gap-5">
                <ButtonHeader style={{backgroundColor: colors.main}}>
                    <img src="/assets/insert_chart.svg" alt="report icon" />

                    <div className="items-center sm-mobile:hidden lg-mobile:flex">
                        <BodyExtraSmall text="Report" style={{color: "var(--normal)"}} />
                    </div>
                </ButtonHeader>

                <ButtonHeader style={{backgroundColor: colors.main}}>
                    <img src="/assets/settings.svg" alt="general settings icon" />
                    
                    <div className="items-center sm-mobile:hidden lg-mobile:flex">
                        <BodyExtraSmall text="Settings" style={{color: ("var(--normal")}} />
                    </div>
                </ButtonHeader>
            </div>
        </div>
    );
}

export default Header;