import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Pagination } from '../components';

export default {
	title: 'Basic/Pagination',
	component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Initial = Template.bind({
});

Initial.args = { 
    lenght:11,
    rowsPerPage:5
}