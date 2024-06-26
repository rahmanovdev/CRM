import React from "react"; 
import { ButtonStyled } from "./styled"; 
 
export default function Button({ 
    height, 
    children, 
    handler, 
    fontSize, 
    display, 
    alignItems, 
    width, 
    type = "default", 
}) { 
    return ( 
        <ButtonStyled 
            width={width} 
            alignItems={alignItems} 
            display={display} 
            fontSize={fontSize} 
            height={height} 
            onClick={handler} 
            type={type} 
        > 
            {children} 
        </ButtonStyled> 
    ); 
}