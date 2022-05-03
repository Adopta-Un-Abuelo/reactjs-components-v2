import React from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 6px;
    background-color: ${Color.background.soft};
    border-radius: 8px;
    overflow: hidden;
`
const Progress = styled.div<{progress: number, color?: string}>`
    background: ${props => props.color ? props.color : Color.background.primary};
    width: ${props => props.progress+'%'};
`

const ProgressBar = (props: Props) =>{

    return(
        <Container style={props.style}>
            {typeof props.progress === 'number' ?
                <Progress progress={props.progress} color={props.color}/>
            : props.progress.map((item, index) =>(
                <Progress key={'progress-value-'+index} progress={item.value} color={item.color}/>
            ))}
        </Container>
    )
}
export default ProgressBar;
export interface Props{
    style?: any,
    progress: number | Array<{
        value: number,
        color?: string
    }>,
    color?: string
}