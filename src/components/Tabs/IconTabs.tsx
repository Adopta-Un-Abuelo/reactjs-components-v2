import React, { useState } from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import Color from '../../constants/Color';

const Container = styled.div`
    display: flex;
`
const Tab = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    border-radius: 4px;
    border: 2px solid ${props => props.selected ? Color.blue3 : Color.gray5};
    padding: 0px 18px;
    cursor: pointer;
    margin-right: 8px;
    color: ${Color.blue3};
    background-color: ${props => props.selected && Color.blue3};
    :hover{
        background-color: ${props => props.selected ? Color.blue3 : Color.gray5}
    }
`
const Icon = styled.div`
    height: 32px;
    width: 32px;
    margin-right: 12px;
`

const Tabs = (props: Props) =>{

    const [selected, setSelected] = useState(props.options[0]);

    const onTabClick = (item: OptionProps) =>{
        setSelected(item);
        props.onChange && props.onChange(item);
    }

    return(
        <Container
            style={props.style}
        >
            {props.options.map(item =>{
                const isSelected = selected.id === item.id;
                return(
                    <Tab
                        key={item.id}
                        selected={isSelected}
                        onClick={() => onTabClick(item)}
                    >
                        <Icon>
                            <item.icon
                                brand={item.id}
                                style={{
                                    height: 32,
                                    width: 32
                                }}
                            />
                        </Icon>
                        <Text type='h5' style={{color: isSelected ? 'white' : undefined}}>
                            {item.title}
                        </Text>
                    </Tab>
                )
        })}
        </Container>
    )
}
export default Tabs;
export interface Props{
    style?: any,
    options: Array<OptionProps>
    onChange?: (a: OptionProps) => void
}
export interface OptionProps{
    id: string,
    title: string
    icon: any
}