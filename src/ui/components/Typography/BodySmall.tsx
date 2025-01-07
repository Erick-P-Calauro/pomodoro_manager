import React from "react"
import { TypographyProps } from "../../types/types.ts";

export const BodySmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-[10px] lg-mobile:text-base" 
            style={props.style} >{props.text}</span>
    );
}