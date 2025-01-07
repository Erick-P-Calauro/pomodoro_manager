import React from "react";
import { HeadlineLarge } from "../Typography/HeadlineLarge.tsx";

function Header() {

    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
                <img className="w-[6=0px] h-[60px]" src="/assets/pomodoro.png" alt="pomodoro icon"></img>
                <HeadlineLarge text="Pomodoro Manager" style={{color: "var(--normal)", maxWidth: "155px"}}/>
            </div>

            <button>
                <img src="/assets/menu.svg" alt="menu icon"></img>
            </button>
        </div>
    );
}

export default Header;