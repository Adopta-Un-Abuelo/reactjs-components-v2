import { ComponentStory, ComponentMeta } from '@storybook/react';

import { P } from '../components';

export default {
	title: 'Basic/Text',
	component: P
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} >Paragraph</P>;

export const Paragraph = Template.bind({});
