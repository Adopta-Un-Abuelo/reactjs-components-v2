import { SwitchIcon } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, MapPin } from 'lucide-react';

export default {
	title: 'Basic/Switch',
	component: SwitchIcon
} as ComponentMeta<typeof SwitchIcon>;
const Template2: ComponentStory<typeof SwitchIcon> = (args) => <SwitchIcon {...args}/>;

export const SwitchWithIcon = Template2.bind({});
SwitchWithIcon.args = {
    options:[
        {
            id: 'option1',
            icon: List
        },
        {
            id: 'option2',
            icon: MapPin
        }
    ]
};