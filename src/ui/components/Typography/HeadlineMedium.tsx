import React from "react"
import { TypographyProps } from "../../types/types.ts";

export const HeadlineMedium = ({...props}:TypographyProps) => {
    return (
        <span className="font-workSans font-semibold text-[20px] lg-mobile:text[22px]" style={props.style} >{props.text}</span>
    );
}