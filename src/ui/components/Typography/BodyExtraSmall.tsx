import React from "react"
import { TypographyProps } from "../../../data/props";

export const BodyExtraSmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-xs lg-mobile:text-sm" style={props.style} >{props.text}</span>
    );
}