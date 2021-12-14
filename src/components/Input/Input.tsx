import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants';

const InputView = styled.div`
    display: flex;
    align-items: center;
    height: 38px;
    border-radius: 40px;
    border: 1px solid ${Color.gray5};
    padding: 0px 16px;
`
const InputStyled = styled.input`
    font-family: 'Poppins';
    font-size: 14px;
    border: none;
    padding: 0px;
    height: 100%;
    width: -webkit-fill-available;
    outline: none;
`

const Input = (props: Props) =>{

    const { style, ...restProps } = props;

    return(
        <InputView
            style={style}
        >
            {props.icon && props.icon}
            <InputStyled
                style={{
                    marginLeft: props.icon ? 16 : 0,
                }}
                {...restProps}
            />
        </InputView>
    )
}
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input">{
    icon?: any
}