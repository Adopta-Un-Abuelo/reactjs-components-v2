import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Feedback } from '../components';

export default {
	title: 'Basic/Feedback',
	component: Feedback
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = (args) => <Feedback {...args} >Paragraph</Feedback>;

export const Success = Template.bind({});

Success.args= {
    type:"success",
    text:"Success message"
}