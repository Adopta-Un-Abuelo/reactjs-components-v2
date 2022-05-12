import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import Color from '../../constants/Color';

const ChipsContainerSmall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 30px;
    border-radius: 50%;
`
const ChipsContainerBig = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    height: 32px;
    left: 118px;
    top: 1082px;
    border-radius: 555px;
`
const ChipSelector = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    height: 32px;
    opacity: 0.8;
    border: 1px solid ${Color.line.soft};
    box-sizing: border-box;
    border-radius: 555px;
`;
const Chip = (props: Props) =>{
    return(
        props.type ==="selector" ?
            <ChipSelector data-testid="chip" {...props}>
                <Text type='p' style={{fontSize:14, fontWeight: 500, color: Color.text.full}}>{props.text}</Text> 
            </ChipSelector>
        : props.type ==="small" ?
            <ChipsContainerSmall data-testid="chip" style={{...props.style, background: !props.inactive ? Color.background.primaryLow : Color.background.soft}}>
                <Text type='p' style={{fontSize:14,color:!props.inactive ? Color.text.primary : Color.text.high}}>
                    {props.text.slice(0,1).toLocaleUpperCase()+props.text.slice(1,2)}
                </Text> 
            </ChipsContainerSmall>
        : props.type ==="big" ?
            <ChipsContainerBig data-testid="chip" style={{...props.style, background: !props.inactive ? Color.background.primaryLow : Color.background.soft}}>
                <Text type='p' style={{fontSize:14,color:!props.inactive ? Color.text.primary : Color.text.high}}>
                    {props.text.slice(0,1).toLocaleUpperCase()+props.text.slice(1,props.text.length).toLocaleLowerCase()}
                </Text> 
            </ChipsContainerBig>
        : null
    )
       
    
}
export default Chip;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text: string,
    type: 'big' | 'small' | 'selector',
    inactive?:boolean
}