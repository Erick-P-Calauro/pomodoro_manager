import React from "react";

function Header() {

    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-5">
                <img className="w-[60px] h-[60px]" src="/pomodoro.png"></img>
                <h1 className="text-textoNormal text-2xl max-w-[155px] font-bold font-workSans">Pomodoro Manager</h1>
            </div>

            <button>
                <img src="/menu.svg"></img>
            </button>
        </div>
    );
}

export default Header;