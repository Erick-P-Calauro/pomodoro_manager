import React from "react"
import { TypographyProps } from "../../../data/props";

export const HeadlineLarge = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-bold text-2xl" style={props.style} >{props.text}</span>
    );
}