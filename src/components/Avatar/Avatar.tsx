import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';

const AvatarContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
`
const Text = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 25.4545px;
    line-height: 40px;
    color: ${Color.text.primary};
    text-align: center;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const Avatar = (props: Props) =>{
    return(
        <AvatarContainer data-testid="avatar" style={{border: props.icon ? `2px solid ${Color.gray6}` : "2px solid "+Color.text.primary, ...props.style}}>
            {props.icon ? <Icon src={props.icon}/> :props.name?  <Text style={{fontSize:props.style?.fontSize}}>{props.name.substring(0,1).toLocaleUpperCase()}</Text>:null }
        </AvatarContainer>
    )
}
export default Avatar;
export interface Props extends ComponentPropsWithoutRef<"div">{
    icon?: any,
    name?:string
}