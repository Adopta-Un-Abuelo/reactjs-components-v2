import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ProgressBar as Progress } from '../components';

export default {
	title: 'Basic/ProgressBar',
	component: Progress
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const ProgressBar = Template.bind({});

ProgressBar.args = { 
    progress: 20
}