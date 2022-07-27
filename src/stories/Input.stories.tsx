import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputCode, InputChat } from '../components';

 export default {
	title: 'Basic/Input',
	component: Input,
	argTypes: {
		onChange: { action: 'onChange' }
	}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>;
export const Simple = Template.bind({});
Simple.args = {
    placeholder: 'Placeholder',
	value: undefined
}; 

const Template2: ComponentStory<typeof InputCode> = (args) => <InputCode {...args}/>;
export const Code = Template2.bind({});

const Template3: ComponentStory<typeof InputChat> = (args) => <InputChat {...args}/>;
export const Chat = Template3.bind({});
Chat.args={
	placeholder: 'Escribe aqui',
	loading: false
}
Chat.argTypes={
	onSend: { action: 'onSend' }
}