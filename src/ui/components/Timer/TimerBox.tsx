import React from "react"

export const TimerBox = ({children, style}) => {
    return (
        <div className="px-4 pt-4 pb-7 rounded-md space-y-4 w-full flex flex-col items-center shadow-tinyBoxShadow
            lg-mobile:px-20 lg-mobile:pt-6 lg-mobile:pb-9 desktop:space-y-6" 
            style={style}>
           {children}
        </div>
    )
}