import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const PStyled = styled.p`
    font-family: 'Poppins';
    margin: 0px;
    color: ${Color.text.full};
`

const P = (props: Props) =>{

    const { style, type, children, weight, ...rest } = props;

    return(
        <PStyled
            style={{
                fontSize: type === 'p' ? 15 : type === 'p2' ? 14 : type === 'c1' ? 12 : 10,
                fontWeight: weight === 'semibold' ? 600 : (weight === 'medium' ? 500 : 400),
                ...style
            }}
            {...rest}
        >
            {children}
        </PStyled>
    )
}
export default P;
export interface Props extends ComponentPropsWithoutRef<"p">{
    type: 'p' | 'p2' | 'c1' | 'c2' | any
    weight?: 'medium' | 'semibold' | 'regular'
}