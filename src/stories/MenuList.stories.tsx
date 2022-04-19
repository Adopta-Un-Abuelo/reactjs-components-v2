import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Package, Palette, Option } from 'lucide-react';
import { Menu as MenuT, MenuList as MenuListT } from '../components';

export default {
	title: 'Basic/Menu',
	component: MenuT,
    argTypes: {
		position: { 
			options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
			control: { type: 'select' }
		},
		onClick: { action: 'onClick' }
	}
} as ComponentMeta<typeof MenuT>;

const Template: ComponentStory<typeof MenuT> = (args) => (
    <div style={{display: 'flex', flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
        <MenuT {...args}/>
    </div>
);

export const Menu = Template.bind({});
Menu.args = {
	id: 'menu'
}

const Template2: ComponentStory<typeof MenuListT> = (args) => (
    <div style={{display: 'flex', flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
        <MenuListT {...args}/>
    </div>
);

export const MenuList = Template2.bind({});
MenuList.args = {
	id: 'menuList',
	options: [
		{
			id: 'option1',
			label: 'Option 1',
			icon: Option
		},
		{
			id: 'option2',
			label: 'Option 2',
			icon: Palette
		},
		{
			id: 'option3',
			label: 'Option 3',
			icon: Package
		}
	]
}