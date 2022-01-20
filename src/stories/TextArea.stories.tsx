import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { TextArea } from '../components';

export default {
	title: 'Basic/TextArea',
	component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextAreaView = Template.bind({});
TextAreaView.args={
	value:"<b>Hola</b>"
}