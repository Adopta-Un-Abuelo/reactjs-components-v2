import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../components';

export default {
	title: 'Basic/Text',
	component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} >Text</Text>;

export const Header = Template.bind({});
Header.args = {
    type: 'h1',
}; 
export const Paragraph = Template.bind({});
