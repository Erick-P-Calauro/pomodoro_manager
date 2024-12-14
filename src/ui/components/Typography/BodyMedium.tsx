import React from "react"
import { TypographyProps } from "../../../data/props";

export const BodyMedium = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-sm" style={props.style} >{props.text}</span>
    );
}