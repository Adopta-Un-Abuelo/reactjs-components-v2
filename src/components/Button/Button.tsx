import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import P from '../Text/P';
import Color from '../../constants/Color';

const ButtonStyled = styled.button`
	height: 40px;
	padding: 0px 16px;
	border-radius: 20px;
	border: none;
	color: white;
	background-color: ${Color.blue3};
`

const Button = (props: Props) => {
  	return (
		<ButtonStyled
			type="button"
			{...props}
		>
			<P weight='semibold'>
				{props.label}
			</P>
		</ButtonStyled>
  	);
};
export default Button;
export interface Props extends ComponentPropsWithoutRef<"button">{
	label: string;
}
