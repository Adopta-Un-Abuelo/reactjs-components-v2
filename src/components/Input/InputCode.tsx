import React, { useRef, ComponentPropsWithoutRef, useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const Container = styled.div`

`
const InputStyled = styled.input`
    height: 56px;
    width: 48px;
    border-radius: 12px;
    border: 1px solid ${Color.line.soft};
    -moz-appearance: textfield;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: 500;
    margin: 0px 2px;
    :focus{
        outline: none !important;
        border: 2px solid ${Color.line.primarySoft};
    }
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const InputCode = (props: Props) =>{

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);
    const input5 = useRef<HTMLInputElement>(null);
    const input6 = useRef<HTMLInputElement>(null);

    const onChange = (input: string, value: string) =>{
        if(input === '1'){
            if(value)
                input2.current?.focus();
        }
        else if(input === '2'){
            if(value)
                input3.current?.focus();
            else
                input1.current?.focus();
        }
        else if(input === '3'){
            if(value)
                input4.current?.focus();
            else
                input2.current?.focus();
        }
        else if(input === '4'){
            if(value)
                input5.current?.focus();
            else
                input3.current?.focus();
        }
        else if(input === '5'){
            if(value)
                input6.current?.focus();
            else
                input4.current?.focus();
        }
        else if(input === '6'){
            if(value){
                if(input1.current){
                    const code = input1.current.value + input2.current?.value + input3.current?.value + input4.current?.value + input5.current?.value + input6.current?.value;
                    props.onChange && props.onChange(code);
                }
            }
            else
                input5.current?.focus();
        }
    }

    return(
        <Container style={props.style}>
            <InputStyled
                ref={input1}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('1', e.target.value)}
            />
            <InputStyled
                ref={input2}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('2', e.target.value)}
            />
            <InputStyled
                ref={input3}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('3', e.target.value)}
            />
            <InputStyled
                ref={input4}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('4', e.target.value)}
            />
            <InputStyled
                ref={input5}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('5', e.target.value)}
            />
            <InputStyled
                ref={input6}
                type={'number'}
                maxLength={1}
                placeholder={'-'}
                onChange={(e: any) => onChange('6', e.target.value)}
            />
        </Container>
    )
}
export default InputCode;
export interface Props extends ComponentPropsWithoutRef<"input">{
    style?: any,
    onChange?: any
}