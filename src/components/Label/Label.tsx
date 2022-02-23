import React, { ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';
import P from '../Text/Paragraph';
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
    border-radius: 4px;
`
const Label = (props: Props) =>{
    return(
        <>
        {props.text==="registered" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#E5F1FC"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#2D7FD9"}}>
                Registrado
            </P>
        </LabelStyled>:
        props.text==="match" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#E7F6ED"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#59C183"}}>
                Matched
            </P>
        </LabelStyled>:
        props.text==="shutdown" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#FCEDF1"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#FF5A5A"}}>
                Baja
            </P>
        </LabelStyled>:
        props.text==="paused" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#F2F2F2"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#828282"}}>
                Pausado
            </P>
        </LabelStyled>:
         props.text==="subscriptor" ? 
         <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#FFEFD4"}}>
             <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#FFAC4B"}}>
                 Pendiente
             </P>
         </LabelStyled>:
        props.text==="particular" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: "#EBF9FF"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#2D55B5"}}>
                Particular
            </P>
        </LabelStyled>:
        props.text==="residence" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: "#EBECFF"}}>
            <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#5963F6"}}>
                Residencia
            </P>
        </LabelStyled>:
         <LabelStyled data-testid="Label" id="Label" {...props} style={{background: props.backgroundColor ? props.backgroundColor:"red"}}>
         <P style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":props.color}}>
             {props.text}
         </P>
     </LabelStyled>
        }
        </>
    )
}
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text?: string,
    backgroundColor?:string,
    color?:string
}