import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";

import { TagSelector as Tags } from "../components";

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
        },
        {
            id: 'option3',
            title: 'Option 3'
        },
        {
            id: 'option4',
            title: 'Option 4'
        },
        {
            id: 'option5',
            title: 'Option 5'
        },
        {
            id: 'option6',
            title: 'Option 6'
        },
        {
            id: 'option7',
            title: 'Option 7'
        },
        {
            id: 'option8',
            title: 'Option 8'
        },
        {
            id: 'option9',
            title: 'Option 9'
        },
        {
            id: 'option10',
            title: 'Option 10'
        },
        {
            id: 'option11',
            title: 'Option 11'
        },
        {
            id: 'option12',
            title: 'Option 12'
        }
    ],
    optionsSelected: [
        {
            id: 'option4',
            title: 'Option 4'
        },
        {
            id: 'option5',
            title: 'Option 5'
        },
    ]
};