import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Check from '../../assets/images/Check';

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
width: 336px;
height: 40px;
left: 124px;
top: 293px;
background: #59C183;
box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 4px;
`


const Text = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
width: 300px;
color: #FFFFFF;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
margin-right: 11px;

`;

const FeedBack = (props: Props) =>{
    return(
        <Container data-testid="feedback">
            <Check style={{marginLeft:11, marginRight:11}}/>
            <Text>{props.text}</Text>
        </Container>
    )
}
export default FeedBack;
export interface Props extends ComponentPropsWithoutRef<"div">{
    type: 'success' | 'error',
    text: string
}