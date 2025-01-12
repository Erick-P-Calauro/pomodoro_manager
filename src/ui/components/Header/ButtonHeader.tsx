import React from "react"

export const ButtonHeader = ({children, style = {}}) => {
    return (
        <button className="
            flex items-center justify-center gap-2 rounded-sm p-2
            hover:brightness-105 ease-in-out duration-200" 
            style={style}
            >
            
            {children}
        </button>
    )
}