import React from "react"
import { TypographyProps } from "../../types/types";

export const BodyMedium = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-sm lg-mobile:text-base" style={props.style} >{props.text}</span>
    );
}