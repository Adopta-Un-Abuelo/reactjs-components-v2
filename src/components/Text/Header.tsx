import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const P = styled.h1`
	padding: 0px;
	margin: 0px;
	font-family: 'Poppins', 'sans-serif';
	color: ${Color.text.full};
`

const H1 = (props: Props) =>{

	const { children, type, weight, style, ...rest } = props;

	return(
		<P
			style={{
				fontSize: type === 'h1' ? 36 : type === 'h2' ? 28 : type === 'h3' ? 24 : type === 'h4' ? 20 :type === 'h5' ? 18 : 16,
				fontWeight: weight === 'semibold' ? 600 : weight === 'medium' ? 500 : 400,
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
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | any,
	weight?: 'semibold' | 'medium' | any
}