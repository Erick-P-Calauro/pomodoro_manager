import React from "react"

export const SettingsBox = ({ children }) => {
    return (
        <div className="flex flex-col items-center space-y-5 pt-3">
            {children}
        </div>
    )
}