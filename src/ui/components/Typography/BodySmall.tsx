import React from "react"
import { TypographyProps } from "../../data";

export const BodySmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-[10px] lg-mobile:text-base" 
            style={props.style} >{props.text}</span>
    );
}