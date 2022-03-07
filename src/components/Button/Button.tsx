import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import animation from '../../assets/animations/button-loading.json'

import Text from '../Text/Text';
import Color from '../../constants/Color';
import ButtonImage from './ButtonImage';

const ButtonPrimary = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 48px;
	padding: 0px 24px;
	border-radius: 12px;
	border: none;
	color: white;
	background-color: ${Color.background.primary};
	opacity: ${props => props.disabled ? 0.48 : 1};
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? Color.background.primary : Color.status.primary.hover};
	}
`
const ButtonSecondary = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 40px;
	width: 100%;
	padding: 0px 16px;
	border-radius: 20px;
	border: ${props => props.disabled ? '1px solid '+ Color.gray3 : '1px solid '+ Color.blue3};
	color: ${props => props.disabled ? Color.gray3 : Color.blue3};
	background-color: transparent;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? 'transparent' : Color.blue3+'30'};
	}
`
const ButtonText = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 40px;
	padding: 0px 16px;
	border-radius: 20px;
	border: none;
	color: ${props => props.disabled ? Color.gray4 : Color.gray2};
	background-color: transparent;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? 'transparent' : Color.gray6};
	}
`

const Button = (props: Props) => {
  	return (
		props.design === 'secondary' ?
			<ButtonSecondary
				data-testid="button"
				type="button"
				{...props}
			>
				{props.loading ?
					<Lottie 
						options={{
							loop: true,
							autoplay: true, 
							animationData: animation,
							rendererSettings: {
								preserveAspectRatio: 'xMidYMid slice'
							}
						}}
						width={70}
					/>
				:
					<>
					{props.icon && props.icon}
					<Text
						type='p' 
						weight='semibold'
						style={{fontSize: props.style?.fontSize ? props.style?.fontSize :16 ,width:"100%",marginLeft: props.icon ? 6 : 0, color: props.disabled ? Color.gray3 : Color.blue3}}
					>
						{props.label}
					</Text>
					</>
				}
			</ButtonSecondary>
		: props.design === 'text' ?
			<ButtonText
				data-testid="button"
				type="button"
				{...props}
			>
				{props.icon && props.icon}
				<Text
					type='p'
					weight='semibold'
					style={{fontSize: props.style?.fontSize ? props.style?.fontSize :16 ,width:"100%",marginLeft: props.icon ? 6 : 0, color: props.disabled ? Color.gray4 : Color.gray2}}
				>
					{props.label}
				</Text>
			</ButtonText>
		: props.design === 'image' ?
			<ButtonImage
				{...props}
			/>
		:
			<ButtonPrimary
				data-testid="button"
				type="button"
				{...props}
			>
				{props.loading ?
					<Lottie 
						options={{
							loop: true,
							autoplay: true, 
							animationData: animation,
							rendererSettings: {
								preserveAspectRatio: 'xMidYMid slice'
							}
						}}
						width={70}
					/>
				:
					<>
					{props.icon && props.icon}
					<Text
						type='p'
						weight='semibold'
						style={{width:"100%",marginLeft: props.icon ? 6 : 0, color: 'white'}}
					>
						{props.label}
					</Text>
					</>
				}
			</ButtonPrimary>
  	);
};
export default Button;
export interface Props extends ComponentPropsWithoutRef<"button">{
	label: string;
	design?: 'primary' | 'secondary' | 'text' | 'image',
	icon?: React.ReactElement,
	loading?: boolean
}
