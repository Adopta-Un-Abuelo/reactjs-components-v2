import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../components';
import { SearchBar } from '../components';
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
<SearchBar/>
<SearchBar/>
<SearchBar/>
</Modal>;

export const ModalViewChilds = Template2.bind({});

ModalViewChilds.args = {
    title:"Title",
    subtitle:"Subtitle"
}