import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import { ModalV2, Input, WebModal, Button } from '../components';
export default {
	title: 'Basic/Modal',
	component: ModalV2,
    argTypes: {
		onClose: { action: 'onClose' }
	}
} as ComponentMeta<typeof ModalV2>;

const Template: ComponentStory<typeof ModalV2> = (args) => {
    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <>
        <Button label={'showModal'} onClick={() => setIsVisible(true)}/>
        <ModalV2 {...args} isVisible={isVisible} onClose={() => setIsVisible(false)}/>
        </>
    )
};
export const ModalView = Template.bind({});
ModalView.args = {
    title:"Title",
    subtitle:"Subtitle",
    isVisible: false,
    hideClose: false,
    error: "",
    buttonProps: {
        label: 'Siguiente',
        disabled: false,
        loading: true
    }
}

const Template2: ComponentStory<typeof ModalV2> = (args) =>{
    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <>
        <Button label={'showModal'} onClick={() => setIsVisible(true)}/>
        <ModalV2 {...args} isVisible={isVisible} onClose={() => setIsVisible(false)}> 
            <Input error={"Error input"}/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </ModalV2>
        </>
    )
}
export const ModalViewChilds = Template2.bind({});
ModalViewChilds.args = {
    title:"Title",
    subtitle:"Subtitle",
    isVisible: false,
    hideClose: false,
    error: "",
    buttonProps: {
        label: 'Siguiente',
        disabled: false
    }
}

const Template3: ComponentStory<typeof WebModal> = (args) => 
<WebModal {...args} />;
export const ModalWeb = Template3.bind({});
ModalWeb.args = {
    title:"Title",
    subtitle:"Subtitle",
    url: 'https://adoptaunabuelo.org'
}