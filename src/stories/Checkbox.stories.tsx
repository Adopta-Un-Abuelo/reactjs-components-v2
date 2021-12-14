import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../components';

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
		}
	],
	selection: 'single'
};
