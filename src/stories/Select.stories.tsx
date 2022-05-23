import { Select as SelectView } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ReactComponent as VenezuelaFlag} from '../assets/images/flags/venezuela.svg';
import { Color } from "../constants";
import { Avatar } from '../components'

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

export const SelectWithIcon = Template2.bind({});
SelectWithIcon.args = {
    title:"sese",
    id: 'select',
    options: [
        {
            id: 'option1',
            sese: 'Option 1',
            icon: () => (<Avatar style={{height: 24, width: 24, fontSize: 12}} name="A"/>)
        },
        {
            id: 'option2',
            sese: 'Option 2',
            icon: () => (<Avatar style={{height: 24, width: 24, fontSize: 12}} name="B"/>)
        }
    ],
    selectedItem: {
        id: 'option2',
        sese: 'Option 2',
        icon: () => (<Avatar style={{height: 24, width: 24, fontSize: 12}} name="B"/>)
    },
    style: {
        color: Color.text.full,
        backgroundColor: 'white',
        border: 'none'
    }
};