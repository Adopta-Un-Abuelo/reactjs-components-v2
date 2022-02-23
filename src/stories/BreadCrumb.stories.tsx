import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { BreadCrumb } from '../components';

export default {
	title: 'Basic/BreadCrumb',
	component: BreadCrumb
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => <BreadCrumb {...args}/>;

export const DropdownView = Template.bind({});
DropdownView.args = {
	steps: 8,
    selectedStep: 4
}