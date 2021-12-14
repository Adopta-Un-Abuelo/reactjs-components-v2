import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Filter } from '../components';

export default {
	title: 'Basic/Filter',
	component: Filter,
	args: {
		label: 'Filter',
		disabled: false
	},
	argTypes: {
		onChange: { action: 'clicked' },
		design: { 
			options: ['single', 'multiple', 'ratio'],
			control: { type: 'select' }
		}
	}
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const SingleSelection = Template.bind({});
SingleSelection.args = {
    design: 'single'
};
