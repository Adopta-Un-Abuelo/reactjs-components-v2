import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Star } from 'lucide-react'

import { Button } from '../components';

export default {
	title: 'Basic/Button',
	component: Button,
	args: {
		label: 'Button',
		disabled: false
	},
	argTypes: {
		onClick: { action: 'onClick' },
		design: { 
			options: ['primary', 'secondary', 'text', 'image'],
			control: { type: 'select' }
		}
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	design: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
	design: 'secondary'
};

export const Text = Template.bind({});
Text.args = {
	design: 'text'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	design: 'primary',
	icon: <Star/>
};

export const ImageButton = Template.bind({});
ImageButton.args = {
	design: 'image',
	icon: <Star/>
};
