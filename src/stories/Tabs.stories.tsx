import { IconTabs, Tabs as TabsD } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import PaycardIcon from '../assets/images/Paycard';

export default {
	title: 'Basic/Tabs',
	component: IconTabs
} as ComponentMeta<typeof IconTabs>;

const Template: ComponentStory<typeof TabsD> = (args) => <TabsD {...args}/>;

export const Tabs = Template.bind({});
Tabs.args = {
    options: [
        {
            id: 'option1',
            title: 'Option 1'
        },
        {
            id: 'option2',
            title: 'Option 2'
        }
    ]
};

const Template2: ComponentStory<typeof IconTabs> = (args) => <IconTabs {...args}/>;

export const TabsIcon = Template2.bind({});
TabsIcon.args = {
    options: [
        {
            id: 'option1',
            title: 'Option 1',
            icon:  PaycardIcon
        },
        {
            id: 'option2',
            title: 'Option 2',
            icon:  PaycardIcon
        }
    ]
};