import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from '../components';

export default {
	title: 'Basic/Avatar',
	component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}/>;

export const AvatarName = Template.bind({});
AvatarName.args = {
    name:"Ronald de Jesús"
}


const Template2: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}/>;

export const AvatarIcon = Template2.bind({});
AvatarIcon.args = {
    icon:"https://socialenterprise.es/wp-content/uploads/2017/10/6743_Adopta-Un-Abuelo-Logo.ORG-vf.jpeg"
}