import React from "react";
import { HeadlineLarge } from "../Typography/HeadlineLarge.tsx";
import { UserButtons } from "./UserButtons.tsx";

function Header({ openSettingModal }) {

    return (
        <div className="flex items-center justify-between py-6">
            
            <div className="flex items-center gap-3">
                <img className="w-[60px] h-[60px]" src="/assets/pomodoro.png" alt="pomodoro icon"></img>
                <HeadlineLarge text="Pomodoro Manager" style={{color: "var(--normal)", maxWidth: "155px"}}/>
            </div>

            <UserButtons openSettingsModal={openSettingModal}/>            
        </div>
    );
}

export default Header;