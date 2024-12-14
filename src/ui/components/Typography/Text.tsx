import React from "react"
import { TypographyProps } from "../../../data/props";

export const Text = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-normal text-[10px]" style={props.style} >{props.text}</span>
    );
}