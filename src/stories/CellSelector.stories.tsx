import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CellSelector as CellSelectorElement } from '../components';
import { Camera } from 'lucide-react';

export default {
	title: 'Basic/CellSelector',
	component: CellSelectorElement
} as ComponentMeta<typeof CellSelectorElement>;

const Template: ComponentStory<typeof CellSelectorElement> = (args) => <CellSelectorElement {...args}/>;

export const CellSelector = Template.bind({});
CellSelector.args = {
    options:[
        {
            id: 'option_1',
            title: 'Opción 1',
            icon: Camera
        },
        {
            id: 'option_2',
            title: 'Opción 2',
            icon: Camera
        },
        {
            id: 'option_3',
            title: 'Opción 3',
            icon: Camera
        }
    ]
}