import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { RadioButton } from '../components';

import { RadioButtonList } from '../components';
export default {
	title: 'Basic/RadioButton',
	component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton  {...args}/>;

export const RadioButtonView = Template.bind({});

RadioButtonView.args = {
	value:"Opcion1",
	text:"Opción 1"
}

const Template1: ComponentStory<typeof RadioButtonList> = (args) => <RadioButtonList {...args}/>;

export const RadioButtonListView= Template1.bind({});

RadioButtonListView.args = {
	options:[{id:"hola",label:"hola"},{id:"adios",label:"adios"}],
	selection:"single"
}