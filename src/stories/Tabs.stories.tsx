import { IconTabs } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import PaycardIcon from '../assets/images/Paycard';

export default {
	title: 'Basic/Tabs',
	component: IconTabs
} as ComponentMeta<typeof IconTabs>;
const Template2: ComponentStory<typeof IconTabs> = (args) => <IconTabs {...args}/>;

export const TabsView = Template2.bind({});
TabsView.args = {
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