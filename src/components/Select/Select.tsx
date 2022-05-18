import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import animation from '../../assets/animations/button-loading.json'
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
    padding: 0px 12px;
    height: 36px;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
`
const OptionsView = styled.div`
    position: absolute;
    top: 45px;
    z-index: 1000;
    border: 1px solid rgba(0, 0, 0, 0.04);
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 4px 8px 0px #0000001A;
    overflow: hidden;
`
const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
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
    const [ selectedItem, setSelectedItem ] = useState(props.options && props.options[0]);

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

    const onOptionClick = (option: any, e: any) =>{
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
                {props.loading ?
                    <Lottie 
                        options={{
                            loop: true,
                            autoplay: true, 
                            animationData: animation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        width={100}
                    />    
                :
                    <>
                    {selectedItem && selectedItem.icon && 
                        <Icon>
                            <selectedItem.icon/>
                        </Icon>
                    }
                    {!props.hideTitle &&
                        <Text
                            type='p'
                            style={{flex: 1, fontSize: 14, fontWeight: 600, color: props.style ? props.style.color : Color.text.full}}
                        >
                            {props.title ? selectedItem[props.title] : selectedItem.title}
                        </Text>
                    }
                    {showMenu ?
                        <ChevronUp height={20} width={20}/>
                    : 
                        <ChevronDown height={20} width={20}/>
                    }
                    </>
                }
            </SelectStyled>
            {showMenu && 
                <OptionsView
                    style={props.optionStyle}
                >
                    {props.options && props.options.map((item, index)=>{
                        return(
                            <Option
                                key={'country'+index}
                                onClick={(e) => onOptionClick(item, e)}
                            >
                                {item.icon && 
                                    <Icon>
                                        <item.icon/>
                                    </Icon>
                                }
                                <Text type='p'>{props.title ? item[props.title ] : item.title}</Text>
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
    loading?: boolean,
    style?: any
    optionStyle?: any
    title?: string
    hideTitle?: boolean,
    options?: Array<any>
    selectedItem?: any
    onChange?: (a: any) => void
}