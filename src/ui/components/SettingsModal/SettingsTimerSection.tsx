import { useFormContext } from "react-hook-form"
import { BodyMedium } from "../Typography/BodyMedium.tsx"
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx"

export const SettingsTimerSection = () => {
    const { register } = useFormContext();
    
    return (
        <div className="w-full px-3 pt-5 space-y-3">
                            
            <div className="flex items-center gap-1">
                <svg height="20px" viewBox="0 -960 960 960" width="24px" className="fill-config">
                    <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 
                    28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 
                    139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 
                    198t198 82Zm0-280Z"/>
                </svg>
                <HeadlineSmall text="Temporizador" style={{color: "var(--config)"}}/>
            </div>

            <div className="space-y-2">
                <BodyMedium text="Tempo (em minutos)" style={{color: "var(--config)", fontWeight: "bold"}}/>

                <div className="grid space-x-2 grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <BodyMedium text="Produtividade" style={{color: "var(--config)", fontWeight: "normal"}}/>
                        <input type="number" {...register("timerProductivity")}
                            className="bg-lightNormal px-3 py-2 text-config placeholder:text-detalhes"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <BodyMedium text="D. Curto" style={{color: "var(--config)", fontWeight: "normal"}}/>
                        <input type="number" {...register("timerShort")}
                            className="bg-lightNormal rounded-sm px-3 py-2 text-config placeholder:text-detalhes"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <BodyMedium text="D. Longo" style={{color: "var(--config)", fontWeight: "normal"}}/>
                        <input type="number" {...register("timerLong")}
                            className="bg-lightNormal px-3 py-2 text-config placeholder:text-detalhes"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}