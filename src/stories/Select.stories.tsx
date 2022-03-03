import { Select as SelectView } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import {ReactComponent as VenezuelaFlag} from '../assets/images/flags/venezuela.svg';
export default {
	title: 'Basic/Select',
	component: SelectView
} as ComponentMeta<typeof SelectView>;
const Template2: ComponentStory<typeof SelectView> = (args) => <SelectView {...args}/>;

export const Select = Template2.bind({});
Select.args = {
    id: 'select',
    options: [
        {
            id: 'option1',
            title: 'Option 1',
            icon: VenezuelaFlag
        },
        {
            id: 'option2',
            title: 'Option 2'
        }
    ],
    selectedItem: {
        id: 'option2',
        title: 'Option 2'
    }
};