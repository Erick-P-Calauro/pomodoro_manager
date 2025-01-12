import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx"
import React from "react"

export const SettingsHeader =  () => {
    return (
        <div className="w-full text-center space-y-3">
            <HeadlineSmall text="Configurações" style={{color: "var(--config)"}}/>

            <hr className="text-detalhes"/>
        </div>
    )
}