import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text as TextStyled } from '../components';

export default {
	title: 'Basic/Text',
	component: TextStyled
} as ComponentMeta<typeof TextStyled>;

const Template: ComponentStory<typeof TextStyled> = (args) => <TextStyled {...args} >Text</TextStyled>;

export const Default = Template.bind({});
Default.args = {
    type: 'h1',
}; 
