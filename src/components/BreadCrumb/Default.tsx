import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color'; 

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Step = styled.div<{isSelected: boolean}>`
    display: flex;
    height: 8px;
    width: 8px;
    border-radius: 5px;
    margin-right: 16px;
    background-color: ${props => props.isSelected ? Color.background.primary : Color.text.low};
`

const BreadCrumb = (props: Props) =>{

    const [ selectedStep, setSelectedStep ] = useState<number>(props.selectedStep ? props.selectedStep : 0);
    const stepsArray = Array.from(Array(props.steps).keys());

    useEffect(() =>{
        if(props.selectedStep)
            setSelectedStep(props.selectedStep);
    }, [props.selectedStep]);

    return(
        <Container
            style={props.style}
        >
            {stepsArray.map((item, index) =>(
                <Step
                    key={'crumb'+index}
                    isSelected={selectedStep === index}
                />
            ))}
        </Container>
    )
}
export default BreadCrumb;
export interface Props{
    style?: any,
    selectedStep?: number
    steps: number
}