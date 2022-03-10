import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";

import { TagSelector as Tags } from "../components";
import PaycardIcon from '../assets/images/Paycard';

export default {
	title: 'Basic/TagSelector',
	component: Tags
} as ComponentMeta<typeof Tags>;
const Template2: ComponentStory<typeof Tags> = (args) => <Tags {...args}/>;

export const TagSelector = Template2.bind({});
TagSelector.args = {
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