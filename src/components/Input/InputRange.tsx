import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';

const InputStyled = styled.input<{lineColor?: string, thumbColor?: string}>`
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    background-color: ${props => props.lineColor ? props.lineColor : Color.line.soft};
    outline: none;
    border-radius: 3px;
    margin: 10px 0px;

    ::-moz-range-thumb{
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: ${Color.background.primary};
        cursor: pointer;
    }
    ::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        appearance: none;
        border-radius: 50%;
        background: ${props => props.thumbColor ? props.thumbColor : Color.background.primary};
        cursor: pointer;
    }
`
const InputRange = (props: Props) =>{

    return(
        <InputStyled 
            {...props}
            type='range'
        />
    )
}
export default InputRange;
export interface Props extends ComponentPropsWithoutRef<"input">{
    lineColor?: string,
    thumbColor?: string
}