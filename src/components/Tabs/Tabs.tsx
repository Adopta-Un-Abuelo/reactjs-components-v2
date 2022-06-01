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
const Cell = styled.div<{selected: boolean, cellColor?: string}>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    cursor: pointer;
    background-color: ${props => props.selected ? (props.color ? props.color : 'white') : 'transparent'};
`

const Tabs = (props: Props) =>{

    const [ selection, setSelection ] = useState(props.selectedOption ? props.selectedOption : props.options[0]);

    const onClick = (option: OptionProps) =>{
        setSelection(option);
        props.onChange && props.onChange(option);
    }

    return(
        <Container
            style={{backgroundColor: props.backgroundColor, ...props.style}}
        >
            {props.options.map(item =>{
                const selected = selection.id === item.id ? true : false;
                return(
                    <Cell
                        key={item.id}
                        selected={selected}
                        onClick={() => onClick(item)}
                        style={props.cellStyle}
                        color={props.cellColor}
                    >
                        <Text type='p' style={{fontSize: 14, color: selected ? props.textColor : undefined, ...props.textStyle}}>
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
    cellColor?: string,
    textColor?: string,
    backgroundColor?: string,
    options: Array<OptionProps>
    selectedOption?: OptionProps,
    onChange?: (option: OptionProps) => void
}
export interface OptionProps{
    id: string,
    title: string
}