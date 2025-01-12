import { useFormContext } from "react-hook-form"
import { BodyMedium } from "../Typography/BodyMedium.tsx"
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx"
import React from "react"

export const SettingsThemeSection = () => {
    const { register } = useFormContext();

    return (
        <div className="w-full space-y-3 px-3 pb-6">
            <div className="flex items-center gap-1">
                <svg height="20px" viewBox="0 -960 960 960" width="24px" className="fill-config">
                    <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 
                    0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 
                    56ZM608-631l-29-29-28-28 57 57Z"/>
                </svg>

                <HeadlineSmall text="Tema" style={{color: "var(--config)"}}/>
            </div>

            <div className="space-y-2">

                <form className="flex items-center justify-between">
                    <BodyMedium text="Cores de tema" style={{color: "var(--config)", fontWeight: "normal"}}/>
                
                    <div className="flex items-center gap-2">
                        <input {...register("themeProductivity")} type="color" className="w-7 h-7 rounded-sm"/>
                        <input {...register("themeShort")} type="color" className="w-7 h-7 rounded-sm"/>
                        <input {...register("themeLong")} type="color" className="w-7 h-7 rounded-sm"/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}