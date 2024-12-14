import React from "react"
import { TypographyProps } from "../../../data/props";

export const BodySmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-[10px]" style={props.style} >{props.text}</span>
    );
}