import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input  } from '../components';

 export default {
	title: 'Basic/Input',
	component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>;
export const Simple = Template.bind({});
Simple.args = {
    placeholder: 'Placeholder',
}; 