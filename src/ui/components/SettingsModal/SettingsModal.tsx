import React from "react"
import { Modal } from "./Modal.tsx"
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx"
import { BodyMedium } from "../Typography/BodyMedium.tsx"
import { BodySmall } from "../Typography/BodySmall.tsx"

export const SettingsModal = ({ setIsOpen }) => {
    return (
        <Modal>
            <div className="flex flex-col items-center space-y-5 pt-3">
                
                <div className="w-full text-center space-y-3">
                    <HeadlineSmall text="Settings" style={{color: "var(--config)"}}/>

                    <hr className="text-detalhes"/>
                </div>

                <div className="w-full px-3 space-y-3">
                    
                    <div className="flex items-center gap-1">
                        <svg height="20px" viewBox="0 -960 960 960" width="24px" className="fill-config">
                            <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 
                            28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 
                            139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 
                            198t198 82Zm0-280Z"/>
                        </svg>
                        <HeadlineSmall text="Timer" style={{color: "var(--config)"}}/>
                    </div>

                    <div className="space-y-2">
                        <BodyMedium text="Time (minutes)" style={{color: "var(--config)", fontWeight: "bold"}}/>

                        <form className="grid space-x-2 grid-cols-3">
                            <div className="flex flex-col gap-2">
                                <BodyMedium text="Produtividade" style={{color: "var(--config)", fontWeight: "normal"}}/>
                                <input type="number" value={"30"}
                                    className="bg-lightNormal px-3 py-2 text-config placeholder:text-detalhes"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <BodyMedium text="D. Curto" style={{color: "var(--config)", fontWeight: "normal"}}/>
                                <input type="number" value={"5"}
                                    className="bg-lightNormal rounded-sm px-3 py-2 text-config placeholder:text-detalhes"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <BodyMedium text="D. Longo" style={{color: "var(--config)", fontWeight: "normal"}}/>
                                <input type="number" value={"10"}
                                    className="bg-lightNormal px-3 py-2 text-config placeholder:text-detalhes"/>
                            </div>
                        </form>
                        
                    </div>
                </div>

                <div className="w-full px-3">
                    <hr className="text-detalhes mt-5"/>
                </div>

                <div className="w-full space-y-3 px-3 pb-6">
                    <div className="flex items-center gap-1">
                        <svg height="20px" viewBox="0 -960 960 960" width="24px" className="fill-config">
                            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 
                            0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 
                            56ZM608-631l-29-29-28-28 57 57Z"/>
                        </svg>

                        <HeadlineSmall text="Theme" style={{color: "var(--config)"}}/>
                    </div>

                    <div className="space-y-2">

                        <form className="flex items-center justify-between">
                            <BodyMedium text="Color Themes" style={{color: "var(--config)", fontWeight: "normal"}}/>
                        
                            <div className="flex items-center gap-2">
                                <input type="color" className="w-7 h-7"/>
                                <input type="color" className="w-7 h-7"/>
                                <input type="color" className="w-7 h-7"/>
                            </div>
                        </form>
                        
                    </div>
                </div>

                <div className="bg-lightNormal w-full py-6">
                    <div className="w-full px-3 flex justify-between">
                        <div></div>
                        
                        <button 
                            className="bg-config px-6 py-1.5 rounded-sm hover:brightness-105 duration-200" 
                            onClick={() => setIsOpen(false)} 
                        >
                            <BodySmall text="Ok" style={{color: "var(--normal)"}} />
                        </button>
                    </div>
                </div>
                
            </div>
        </Modal>
    )
}