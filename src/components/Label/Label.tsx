import React, { ComponentPropsWithoutRef } from 'react';
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
    color: ${props=> props.color ? props.color:"white"};
    border-radius: 4px;
`

const Text = styled.p`
//styleName: Paragraph Medium/Sem Text *;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

`;
const Label = (props: Props) =>{
    return(
        <LabelStyled id="Label" {...props}>
            <P style={{"fontFamily?": "Poppins","fontSize?": "14px","fontStyle?": "normal","fontWeight": "600","lineHeight": "22px","letterSpacing": "0em","textAlign": "left"}}>{props.text}</P>
        </LabelStyled>
    )
}
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text?: string,
    backgroundColor?:string,
    color?:string
}