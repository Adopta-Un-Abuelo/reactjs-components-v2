import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '../components';

export default {
	title: 'Basic/Label',
	component: Label,
    argTypes: {
        text: { 
			options: ['inRegister', 'registered', 'subscriptor', 'training', 'match', 'pause', 'shutdown', 'exSubscriptor', 'pending', 'inProgress', 'done', 'canceled'],
			control: { type: 'select' }
		}
    }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'registered'
};