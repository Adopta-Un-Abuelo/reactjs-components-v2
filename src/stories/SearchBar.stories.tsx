import { SearchBar } from "../components";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Basic/SearchBar',
	component: SearchBar
} as ComponentMeta<typeof SearchBar>;
const Template2: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args}/>;

export const SearchBarView = Template2.bind({});
SearchBarView.args = {
    placeholder: 'Search'
};