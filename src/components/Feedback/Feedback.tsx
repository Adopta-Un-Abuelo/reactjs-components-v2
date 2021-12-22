import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Check from '../../assets/images/Check.svg';

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
width: 336px;
height: 40px;
left: 124px;
top: 293px;
background: #dbe0dd;
box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 4px;
`
const Icon = styled.img`
margin-right:11px;
margin-left:11px;
`;

const Text = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #FFFFFF;
`;

const FeedBack = (props: Props) =>{
    return(
        <Container data-testid="feedback">
            <Icon src={Check}></Icon>
            <Text>{props.text}</Text>
        </Container>
    )
}
export default FeedBack;
export interface Props extends ComponentPropsWithoutRef<"div">{
    type: 'success' | 'error',
    text: string
}