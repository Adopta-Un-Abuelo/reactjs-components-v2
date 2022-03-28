import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MenuList } from '../components';

export default {
	title: 'Basic/MenuList',
	component: MenuList,
    argTypes: {
		position: { 
			options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
			control: { type: 'select' }
		}
	}
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
    <div style={{display: 'flex', flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
        <MenuList {...args}/>
    </div>
);

export const MenuListView = Template.bind({});
MenuListView.args = {
	id: 'menuList'
}