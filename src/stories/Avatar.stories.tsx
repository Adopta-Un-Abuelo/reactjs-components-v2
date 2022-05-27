import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { Avatar } from '../components';

export default {
	title: 'Basic/Avatar',
	component: Avatar,
    argTypes: {
		onChange: { action: 'onChange' }
	}
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {

    const [ logo, setLogo ] = useState<string | undefined>(undefined);

    return(
        <Avatar {...args} onChange={(base64: string) => setLogo(base64)} icon={logo}/>
    )
};

export const AvatarName = Template.bind({});
AvatarName.args = {
    name:"Ronald de Jesús",
}


const Template2: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}/>;

export const AvatarIcon = Template2.bind({});
AvatarIcon.args = {
    icon:"https://socialenterprise.es/wp-content/uploads/2017/10/6743_Adopta-Un-Abuelo-Logo.ORG-vf.jpeg"
}