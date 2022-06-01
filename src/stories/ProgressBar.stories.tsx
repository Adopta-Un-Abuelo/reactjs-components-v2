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

export const ProgressBarWithMultipleValues = Template.bind({});

ProgressBarWithMultipleValues.args = { 
    progress: [ 
		{
			value: 85,
			color: 'linear-gradient(90deg, #006BE5 0%, #004FA8 100%)'
		}, 
		{
			value: 10, 
			color: 'linear-gradient(270deg, #FFAA47 -0.16%, #F9713D 99.84%)'
		},
		{
			value: 5,
			color: '#828282'
		}
	],
	style: {
		height: 12
	}
}