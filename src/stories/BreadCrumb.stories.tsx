import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { BreadCrumb as BreadCrumbView } from '../components';

export default {
	title: 'Basic/BreadCrumb',
	component: BreadCrumbView
} as ComponentMeta<typeof BreadCrumbView>;

const Template: ComponentStory<typeof BreadCrumbView> = (args) => <BreadCrumbView {...args}/>;

export const BreadCrumb = Template.bind({});
BreadCrumb.args = {
	steps: 8,
    selectedStep: 4
}