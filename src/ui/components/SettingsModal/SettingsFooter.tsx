import { BodySmall } from "../Typography/BodySmall.tsx"
import React from "react"

export const SettingsFooter = () => {
    return (
        <div className="bg-lightNormal w-full py-6">
            <div className="w-full px-3 flex justify-between">
                <div></div>
                
                <button 
                    type="submit"
                    className="bg-config px-6 py-1.5 rounded-sm hover:brightness-105 duration-200" 
                >
                    <BodySmall text="Ok" style={{color: "var(--normal)"}} />
                </button>
            </div>
        </div>
    )
}