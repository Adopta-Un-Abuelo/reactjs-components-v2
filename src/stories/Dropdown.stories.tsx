import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Dropdown } from '../components';

export default {
	title: 'Basic/Dropdown',
	component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args}/>;

export const DropdownView = Template.bind({});
DropdownView.args = {
	title:"name",
	data:[
		{name:"ronlad de Jesus", image:""}, 
		{name:"María martinez", image:"https://adoptaunabuelo.org/wp-content/uploads/2021/09/RTG00124.jpg"}
	]
}