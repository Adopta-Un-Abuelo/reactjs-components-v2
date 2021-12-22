import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Input, SearchBar as Search } from '../components';

export default {
	title: 'Basic/Input',
	component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Search> = (args) => <Input {...args}/>;
export const Simple = Template.bind({});
Simple.args = {
    placeholder: 'Placeholder'
};

const Template2: ComponentStory<typeof Search> = (args) => <Search {...args}/>;

export const SearchBar = Template2.bind({});
SearchBar.args = {
    placeholder: 'Search'
};
