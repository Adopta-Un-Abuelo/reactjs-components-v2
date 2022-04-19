import React, { ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
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
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#E5F1FC", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#2D7FD9"}}>
                Registrado
            </Text>
        </LabelStyled>:
        props.text==="match" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#E7F6ED", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#59C183"}}>
                Matched
            </Text>
        </LabelStyled>:
        props.text==="shutdown" || props.text==="exSubscriptor"? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#FCEDF1", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#FF5A5A"}}>
                Baja
            </Text>
        </LabelStyled>:
        props.text==="paused" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#F2F2F2", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#828282"}}>
                Pausado
            </Text>
        </LabelStyled>:
         props.text==="subscriptor" ? 
         <LabelStyled data-testid="Label" id="Label" {...props} style={{background:"#FFEFD4", ...props.style}}>
             <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#FFAC4B"}}>
                 Pendiente
             </Text>
         </LabelStyled>:
        props.text==="particular" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: "#EBF9FF", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#2D55B5"}}>
                Particular
            </Text>
        </LabelStyled>:
        props.text==="residence" ? 
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: "#EBECFF", ...props.style}}>
            <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":"#5963F6"}}>
                Residencia
            </Text>
        </LabelStyled>:
         <LabelStyled data-testid="Label" id="Label" {...props} style={{background: props.backgroundColor ? props.backgroundColor:"red", ...props.style}}>
         <Text type='p' style={{fontFamily: "Poppins",fontSize: "14px",fontStyle: "normal",fontWeight: "600",lineHeight: "22px",letterSpacing: "0em",textAlign: "left", "color":props.color}}>
             {props.text}
         </Text>
     </LabelStyled>
        }
        </>
    )
}
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text?: string,
    backgroundColor?:string,
    color?:string,
}