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
const Progress = styled.div<{progress: number}>`
    background-color: ${Color.background.primary};
    width: ${props => props.progress+'%'};
`

const ProgressBar = (props: Props) =>{

    return(
        <Container style={props.style}>
            <Progress progress={props.progress}/>
        </Container>
    )
}
export default ProgressBar;
export interface Props{
    style?: any,
    progress: number
}