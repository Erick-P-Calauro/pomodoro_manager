import React from "react"
import { TypographyProps } from "../../../data/props";

export const HeadlineMedium = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-semibold text-[20px]" style={props.style} >{props.text}</span>
    );
}