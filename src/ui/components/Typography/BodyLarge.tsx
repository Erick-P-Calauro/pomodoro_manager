import React from "react"
import { TypographyProps } from "../../../data/props";

export const BodyLarge = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-base" style={props.style} >{props.text}</span>
    );
}