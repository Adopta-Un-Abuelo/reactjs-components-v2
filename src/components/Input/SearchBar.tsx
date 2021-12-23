import React, { ComponentPropsWithoutRef } from 'react';

import { Search } from 'react-feather';
import Input from './Input';
import Color from '../../constants/Color';

const SearchBar = (props: Props) =>{
    return(
        <Input
            data-testid="searchbar"
            icon={<Search stroke={Color.gray2}/>}
            {...props}
        />
    )
}
export default SearchBar;
export interface Props extends ComponentPropsWithoutRef<"input">{
    icon?: any,
    type?: "big" | "small"
}