import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../components';

export default {
	title: 'Basic/Checkbox',
	component: Checkbox,
	args: {
		label: 'Checkbox label',
		selected: false
	},
    argTypes: {
		onClick: { action: 'clicked' }
	}
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Simple = Template.bind({});
