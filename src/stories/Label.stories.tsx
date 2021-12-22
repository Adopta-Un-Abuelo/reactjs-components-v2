import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '../components';

export default {
	title: 'Basic/Label',
	component: Label,
	args: {
        text: 'texto',
        color:"#2D7FD9",
    }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;



export const Registrado = Template.bind({});
Registrado.args = {
    text: 'Registrado',
    backgroundColor:"#E5F1FC",
    color:"#2D7FD9"
};

export const Matched = Template.bind({});
Matched.args = {
    text: 'Matched',
    backgroundColor:"#E7F6ED",
    color:"#59C183"
};

export const Pendiente = Template.bind({});
Pendiente.args = {
    text: 'Pendiente',
    backgroundColor:"#FFEFD4",
    color:"#FFAC4B"
};

export const Pausado = Template.bind({});
Pausado.args = {
    text: 'Pausado',
    backgroundColor:"#F2F2F2",
    color:"#828282"
};

export const Baja = Template.bind({});
Baja.args = {
    text: 'Baja',
    backgroundColor:"#FCEDF1",
    color:"#FF5A5A"
};

export const Particular = Template.bind({});
Particular.args = {
    text: 'Particular',
    backgroundColor:"#EBF9FF",
    color:"#2D55B5"
};

export const Residencia = Template.bind({});
Residencia.args = {
    text: 'Residencia',
    backgroundColor:"#EBECFF",
    color:"#5963F6"
};