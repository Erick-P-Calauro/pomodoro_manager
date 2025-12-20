import React from "react";

export const Modal = ({ children } : any) => {
    return (
        <div className="bg-transparent w-[100vw] h-[100vh] z-[1000] fixed backdrop-blur-sm top-0 left-0 flex justify-center ">
            <div className={`
                bg-normal mt-5 overflow-y-scroll rounded-md scrollbar-none
                sm-mobile:w-[300px] desktop:w-[400px] h-fit
            `}>

                {children}
            </div>
        </div>
    );
}