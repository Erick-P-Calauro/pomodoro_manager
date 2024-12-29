import React from "react"
import { TypographyProps } from "../../data";

export const Text = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-normal text-[10px] lg-mobile:text-xs" style={props.style} >{props.text}</span>
    );
}