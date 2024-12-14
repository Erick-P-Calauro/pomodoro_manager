import React from "react"
import { TypographyProps } from "../../../data/props";

export const BodyExtraSmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-xs" style={props.style} >{props.text}</span>
    );
}