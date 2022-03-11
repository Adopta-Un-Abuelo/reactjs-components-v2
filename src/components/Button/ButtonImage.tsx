import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Text from '../../../src/components/Text/Text';
import Color from '../../../src/constants/Color';

const Container = styled.button<{disabled?: boolean}>`
    display: inline-flex;
    padding: 8px;
    border-radius: 4px;
    cursor: ${props => !props.disabled && 'pointer'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.disabled ? 0.5 : 1.0};
    border: none;
    background-color: transparent;
    :hover{
        background-color: ${props => !props.disabled && Color.status.neutral.hover}
    }
`
const Icon = styled.img`
    height: 24px;
    width: 24px;
`

const ButtonImage = (props: Props) =>{

    return(
        <Container
            {...props}
        >
            {props.icon ?
                props.icon
            :
                <Icon
                    src={props.src}
                />
            }
            {props.label &&
                <Text
                    type='p'
                    style={{marginTop: 2, fontSize: 14}}
                >
                    {props.label}
                </Text>
            }
        </Container>
    )
}
export default ButtonImage;
export interface Props extends ComponentPropsWithoutRef<"button">{
    style?: any
    label?: string,
    src?: any,
    icon?: any,
    disabled?: boolean,
    selected?: boolean
}