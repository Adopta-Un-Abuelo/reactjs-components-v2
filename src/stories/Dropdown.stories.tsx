import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '../components';

export default {
	title: 'Basic/Dropdown',
	component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args}/>;

export const DropdownView = Template.bind({});
