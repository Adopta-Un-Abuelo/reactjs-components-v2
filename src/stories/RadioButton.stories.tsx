import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { RadioButton } from '../components';

export default {
	title: 'Basic/RadioButton',
	component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args}/>;

export const RadioButtonView = Template.bind({});