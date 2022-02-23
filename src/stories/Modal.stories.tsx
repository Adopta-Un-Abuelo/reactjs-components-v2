import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Modal, Input, WebModal } from '../components';
export default {
	title: 'Basic/Modal',
	component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const ModalView = Template.bind({});
ModalView.args = {
    title:"Title",
    subtitle:"Subtitle"
}

const Template2: ComponentStory<typeof Modal> = (args) => 
<Modal {...args} > 
    <Input style={{"marginBottom":"16px"}} error={"Error input"}/>
    <Input/>
    <Input/>
</Modal>;
export const ModalViewChilds = Template2.bind({});
ModalViewChilds.args = {
    title:"Title",
    subtitle:"Subtitle"
}

const Template3: ComponentStory<typeof WebModal> = (args) => 
<WebModal {...args} />;
export const ModalWeb = Template3.bind({});
ModalWeb.args = {
    title:"Title",
    subtitle:"Subtitle",
    url: 'https://adoptaunabuelo.org'
}