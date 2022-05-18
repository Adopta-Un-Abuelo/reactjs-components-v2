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
    title:"sese",
    id: 'select',
    options: [
        {
            id: 'option1',
            sese: 'Option 1',
            icon: VenezuelaFlag
        },
        {
            id: 'option2',
            sese: 'Option 2'
        }
    ],
    selectedItem: {
        id: 'option2',
        sese: 'Option 2'
    }
};

export const SelectWithStyles = Template2.bind({});
SelectWithStyles.args = {
    title:"sese",
    id: 'select',
    options: [
        {
            id: 'option1',
            sese: 'Option 1',
            icon: VenezuelaFlag
        },
        {
            id: 'option2',
            sese: 'Option 2'
        }
    ],
    selectedItem: {
        id: 'option2',
        sese: 'Option 2'
    },
    style: {
        color: '#FF8854',
        backgroundColor: '#FFF1D6',
        border: 'none'
    }
};