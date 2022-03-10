import React from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import Color from '../../constants/Color';

const Container = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0px 12px;
    width: fit-content;
    border-radius: 20px;
    border: ${props => props.selected ? '2px solid '+Color.line.primary : '1px solid '+Color.line.primarySoft};
    background-color: ${props => props.selected ? Color.background.primaryLow : 'transparent'};
    margin: 2px;
    cursor: pointer;
`

const Tags = (props: Props) =>{

    const onClick = () =>{
        props.onClick && props.onClick();
    }

    return(
        <Container
            style={props.style}
            selected={props.selected}
            onClick={onClick}
        >
            <Text type='p' style={{color: props.selected ? Color.text.primary : Color.text.high, fontSize: 14, fontWeight: 600}}>
                {props.title}
            </Text>
        </Container>
    )
}
export default Tags;
export interface Props{
    style?: any,
    title: string,
    selected: boolean,
    onClick?: () => void
}