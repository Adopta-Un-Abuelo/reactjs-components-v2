import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const PStyled = styled.p`
    font-family: 'Poppins';
    font-size: 16px;
    margin: 0px;
`

const P = (props: Props) =>{
    return(
        <PStyled
            {...props}
            style={{
                fontWeight: props.weight === 'bold' ? 700 : (props.weight === 'semibold' ? 600 : 400),
                ...props.style
            }}
        >
            {props.children}
        </PStyled>
    )
}
export default P;
export interface Props extends ComponentPropsWithoutRef<"p">{
    weight?: 'bold' | 'semibold'
}