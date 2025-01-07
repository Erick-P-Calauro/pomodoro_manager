import React from "react"
import { TypographyProps } from "../../types/types.ts";

export const Text = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-normal text-[10px] lg-mobile:text-xs" style={props.style} >{props.text}</span>
    );
}