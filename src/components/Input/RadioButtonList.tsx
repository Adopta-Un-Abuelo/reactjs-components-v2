import { useState } from 'react';
import styled from 'styled-components';
import React from 'react'
import Radiobutton from './RadioButton';

const Container = styled.div`
`

const RadioButtonList = (props: Props) =>{

    const [ selection, setSelection ] = useState(props.options.filter(e => e.defaultSelection));
    const [ update, setUpdate ] = useState(false);

    const onClick = (item: any) =>{
        const result = selection.findIndex(obj => item.id === obj.id);
        let tempArray = selection;
        if(props.selection === 'single') tempArray = [item];
        else if(result === -1)
            tempArray.push(item);
        else
            tempArray.splice(result, 1);
        setSelection(tempArray);
        setUpdate(!update);
        props.onChange && props.onChange(tempArray);
    }

    return(
        <Container data-testid="radiobuttonlist">
            {props.options.map(item => {
                const active = selection.some(e => e.id === item.id);
                return(
                    <Radiobutton
                        key={item.id}
                        style={{marginBottom: 16}}
                        text={item.label}
                        selected={active}
                        onClick={() => onClick(item)}
                    />
                )
            })}
        </Container>
    )
}
export default RadioButtonList;
export interface Props{
    options: Array<{
        id: string,
        label: string,
        sublabel?: string,
        defaultSelection?: boolean
    }>,
    selection: 'single' | 'multiple',
    onChange?: Function
}