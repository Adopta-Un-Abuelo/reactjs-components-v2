import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../components';

export default {
	title: 'Basic/Chip',
	component: Chip
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const ChipInfo = Template.bind({});
ChipInfo.args = {
    text:"Aficiones",
    type:"big"
}