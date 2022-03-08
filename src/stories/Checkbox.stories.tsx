import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Checkbox, Text } from '../components';

export default {
	title: 'Basic/Checkbox',
	component: Checkbox,
    argTypes: {
		onChange: { action: 'onChange' },
		selection: { 
			options: ['single', 'multiple'],
			control: { type: 'select' }
		}
	}
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Simple = Template.bind({});
Simple.args = {
	options: [
		{
			id: 'option_1',
			label: 'Checkbox label',
			sublabel: 'Checkbox sublabel'
		}
	]
};

export const List = Template.bind({});
List.args = {
	options: [
		{
			id: 'option_1',
			label: 'Option 1'
		},
		{
			id: 'option_2',
			label: 'Option 2',
			sublabel: 'Option 2 sublabel'
		},
		{
			id: 'option_3',
			label: 'Option 3'
		},
		{
			id: 'option_4',
			Element:  <Text type='p'>
				Autorizo al tratamiento de los datos aportados con el fin de que Adopta un Abuelo pueda cursar el formulario y acepto 
				la <a href="https://www.adoptaunabuelo.org/politica-privacidad" target="_blank">Política de Privacidad</a> y 
				los <a href="https://www.adoptaunabuelo.org/terminos-condiciones" target="_blank">Términos y condiciones de uso</a>
			</Text>
		}
	],
	selection: 'single'
};
