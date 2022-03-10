import React, { useState } from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const TagSelector = (props: Props) =>{

    const [ selection, setSelection ] = useState<Array<OptionProps>>([]);

    const onClick = (item: OptionProps) =>{
        const tempArray = [...selection];
        const index = tempArray.findIndex(e => e.id === item.id);
        if(index > -1)  //Remove the object
            tempArray.splice(index, 1);
        else
            tempArray.push(item);
        setSelection(tempArray)
        props.onChange && props.onChange(tempArray);
    }

    return(
        <Container
            style={props.style}
        >
            {props.options.map(item =>{
                const isSelected = selection.some(temp => temp.id === item.id);
                return(
                    <Tag
                        key={item.id}
                        title={item.title}
                        selected={isSelected}
                        onClick={() => onClick(item)}
                    />
                )
            })}
        </Container>
    )
}
export default TagSelector;
export interface Props{
    style?: any,
    options: Array<OptionProps>,
    onChange?: (selection: Array<OptionProps>) => void
}
export interface OptionProps{
    id: string,
    title: string
}