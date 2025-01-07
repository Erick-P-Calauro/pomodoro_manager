import React from "react"
import { TypographyProps } from "../../types/types.ts";

export const HeadlineSmall = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-medium text-lg" style={props.style} >{props.text}</span>
    );
}