import React, { useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';
import Text from '../Text/Text';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${Color.background.soft};
    height: 36px;
    border-radius: 1000px;
    padding: 2px;
`
const Cell = styled.div<{selected: boolean}>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    cursor: pointer;
    background-color: ${props => props.selected ? 'white' : 'transparent'};
`

const Tabs = (props: Props) =>{

    const [ selection, setSelection ] = useState(props.selectedOption ? props.selectedOption : props.options[0]);

    const onClick = (option: OptionProps) =>{
        setSelection(option);
        props.onChange && props.onChange(option);
    }

    return(
        <Container
            style={props.style}
        >
            {props.options.map(item =>{
                const selected = selection.id === item.id ? true : false;
                return(
                    <Cell
                        key={item.id}
                        selected={selected}
                        onClick={() => onClick(item)}
                        style={props.cellStyle}
                    >
                        <Text type='p' style={{fontSize: 14, ...props.textStyle}}>
                            {item.title}
                        </Text>
                    </Cell>
                )
            })}
        </Container>
    )
}
export default Tabs;
export interface Props{
    style?: any,
    cellStyle?: any,
    textStyle?: any,
    options: Array<OptionProps>
    selectedOption?: OptionProps,
    onChange?: (option: OptionProps) => void
}
export interface OptionProps{
    id: string,
    title: string
}