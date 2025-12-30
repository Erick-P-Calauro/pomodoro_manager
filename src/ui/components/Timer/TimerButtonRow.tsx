import React from "react";

export const TimerButtonRow = ({children} : any) => {

    return (
        <div className="w-full flex items-center justify-between">
            {children}
        </div>
    );
}
