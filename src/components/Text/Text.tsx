import React, { ComponentPropsWithoutRef } from 'react';

import Header from './Header';
import Paragraph from './Paragraph';

const Text = (props: Props) =>{

	return(props.type === 'h1' || props.type === 'h2' || props.type === 'h3' || props.type === 'h4' || props.type === 'h5' ?
        <Header {...props}>
            {props.children}
        </Header>
    :
		<Paragraph {...props}>
			{props.children}
		</Paragraph>
	)
}
export default Text;
export interface Props extends ComponentPropsWithoutRef<"p">{
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
    weight?: 'semibold' | 'bold'
}