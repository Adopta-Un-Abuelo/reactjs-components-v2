import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Filter } from '../components';

export default {
	title: 'Basic/Filter',
	component: Filter,
	args: {
		label: 'Filter',
		options: [
			{
				id: 'option_1',
				label: 'Option 1'
			},
			{
				id: 'option_2',
				label: 'Option 2'
			},
			{
				id: 'option_3',
				label: 'Option 3'
			},
			{
				id: 'option_4',
				label: 'Option 4'
			},
			{
				id: 'option_5',
				label: 'Option 5'
			},
			{
				id: 'option_6',
				label: 'Option 6'
			},
			{
				id: 'option_7',
				label: 'Option 7'
			},
			{
				id: 'option_8',
				label: 'Option 8'
			}
		],
		disabled: false
	},
	argTypes: {
		onChange: { action: 'onChange' },
		design: { 
			options: ['single', 'multiple', 'ratio'],
			control: { type: 'select' }
		}
	}
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const SingleSelection = Template.bind({});
SingleSelection.args = {
    design: 'single',
	id: 'single'
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
    design: 'multiple',
	id: 'multiple'
};
