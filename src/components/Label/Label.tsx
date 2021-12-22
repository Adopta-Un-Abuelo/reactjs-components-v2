import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import P from '../Text/P';
const LabelStyled = styled.div`
    font-family: 'Poppins';
    font-size: 16px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    width: 110px;
    height: 34px;
    left: 117px;
    top: 382px;
    background: ${props=> props.backgroundColor ? props.backgroundColor:"red"};
    border-radius: 4px;
`
const Label = (props: Props) =>{
    return(
        <LabelStyled data-testid="Label" id="Label" {...props}>
            <P style={{"fontFamily?": "Poppins","fontSize?": "14px","fontStyle?": "normal","fontWeight": "600","lineHeight": "22px","letterSpacing": "0em","textAlign": "left", "color":props.color}}>{props.text}</P>
        </LabelStyled>
    )
}
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text?: string,
    backgroundColor?:string,
    color?:string
}