import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const P = styled.h1`
	padding: 0px;
	margin: 0px;
	font-family: 'Poppins', 'sans-serif';
	font-size: 42px;
	font-weight: 700;
	line-height: 48px;
	color: ${Color.gray2};
`

const H1 = (props: Props) =>{

	const { children, type, style, ...rest } = props;

	return(
		<P
			style={{
				fontSize: type === 'h1' ? 42 : type === 'h2' ? 24 : type === 'h3' ? 20 : type === 'h4' ? 18 : 16,
				fontWeight: type === 'h4' || type === 'h5' ? 600 : 700,
				...style
			}}
			{...rest}
		>
			{children}
		</P>
	)
}
export default H1;
export interface Props extends ComponentPropsWithoutRef<"h1">{
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | any
}