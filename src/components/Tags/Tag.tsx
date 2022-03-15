import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

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
    ${media.lessThan("small")`
        height: 36px;
        margin: 4px;
    `}
`
const TextStyled = styled(Text)<{selected: boolean}>`
    color: ${props => props.selected ? Color.text.primary : Color.text.high};
    font-size: 14px;
    ${media.lessThan("small")`
        font-size: 12px;
    `}
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
            <TextStyled type='p' selected={props.selected}>
                {props.title}
            </TextStyled>
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