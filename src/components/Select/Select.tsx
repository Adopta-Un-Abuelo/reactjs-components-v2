import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import Color from '../../constants/Color';
import { ChevronDown, ChevronUp } from 'lucide-react'

const Container = styled.div`
    position: relative;
`
const SelectStyled = styled.div<{showMenu: boolean}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${Color.gray5};
    padding: 8px 16px;
    border-radius: 4px;
    border-bottom-left-radius: ${props => props.showMenu && 0};
    border-bottom-right-radius: ${props => props.showMenu && 0};
    cursor: pointer;
    background-color: white;
`
const OptionsView = styled.div`
    position: absolute;
    top: 45px;
    z-index: 1000;
    border: 1px solid ${Color.gray5};
    background-color: white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`
const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    border-bottom: 1px solid ${Color.gray5};
    :hover{
        background-color: ${Color.gray5};
    }
`
const Icon = styled.div`
    height: 24px;
    width: 24px;
    margin-right: 8px;
`

const Select = (props: Props) =>{

    const [ showMenu, setShowMenu ] = useState(false);
    const [ selectedItem, setSelectedItem ] = useState(props.options[0]);

    useEffect(() =>{
        window.addEventListener('click', (e) => closeMenu(e));
        return window.removeEventListener('click', () => undefined);
    }, []);

    useEffect(() =>{
        if(props.selectedItem){
            setSelectedItem(props.selectedItem)
        }
    }, [props.selectedItem]);

    const onSelectClick = (e: any) =>{
        if (!e) var e: any = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        setShowMenu(!showMenu);
    }

    const closeMenu = (e: any) =>{
        const element = document.getElementById(props.id);
        if(element !== null){
            if(!element.contains(e.target)){
                setShowMenu(false);
            }
        }
    }

    const onOptionClick = (option: OptionProps, e: any) =>{
        if (!e) var e: any = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        setSelectedItem(option);
        setShowMenu(false);
        props.onChange && props.onChange(option);
    }

    return(
        <Container>
            <SelectStyled
                id={props.id}
                style={props.style}
                showMenu={showMenu}
                onClick={onSelectClick}
            >
                {selectedItem && selectedItem.icon && 
                    <Icon>
                        {selectedItem.icon}
                    </Icon>
                }
                {!props.hideTitle &&
                    <Text
                        type='p'
                        style={{flex: 1}}
                    >
                        {props.title ? props.title : selectedItem.title}
                    </Text>
                }
                {showMenu ?
                    <ChevronUp/>
                : 
                    <ChevronDown/>
                }
            </SelectStyled>
            {showMenu && 
                <OptionsView
                    style={props.optionStyle}
                >
                    {props.options.map((item, index)=>{
                        return(
                            <Option
                                key={'country'+index}
                                onClick={(e) => onOptionClick(item, e)}
                            >
                                {item.icon && 
                                    <Icon>
                                        {item.icon}
                                    </Icon>
                                }
                                <Text type='p'>{item.title}</Text>
                            </Option>
                        )
                    })}
                </OptionsView>
            }
        </Container>
    )
}
export default Select;
export interface Props{
    id: string,
    style?: any
    optionStyle?: any
    title?: string
    hideTitle?: boolean,
    options: Array<OptionProps>
    selectedItem?: OptionProps
    onChange?: (a: OptionProps) => void
}
export interface OptionProps{
    id: string,
    icon?: any,
    title: string
}