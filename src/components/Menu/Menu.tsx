import React, { useEffect, useState, forwardRef, Ref, useImperativeHandle } from 'react';
import styled from 'styled-components';

import { MoreVertical } from 'lucide-react'; 
import Button from '../Button/Button';
import Color from '../../constants/Color';

const Container = styled.div`
    position: relative;
`
const FilterView = styled.div<{position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'}>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${props => (props.position === 'bottom-left' || props.position === 'bottom-right') ? '48px' : 'unset'};
    bottom: ${props => (props.position === 'top-left' || props.position === 'top-right') ? '48px' : 'unset'};
    right: ${props => (props.position === 'bottom-left' || props.position === 'top-left') ? '18px' : 'unset'};
    left: ${props => (props.position === 'bottom-right' || props.position === 'top-right') ? '18px' : 'unset'};
    padding: 16px;
    border-radius: 12px;
    height: 262px;
    width: 304px;
    background-color: white;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    z-index: 1000;
    border: 1px solid ${Color.line.soft};
    overflow: hidden;
`

const MenuList = forwardRef((props: MenuProps, ref: Ref<MenuRef>) =>{

    const [ showView, setShowView ] = useState(false);

    useImperativeHandle(ref, () => ({
        close(){
            setShowView(false);
        }
    }));

    useEffect(() =>{
        //On click outside the filter view
        document.addEventListener('mousedown', (e: any) => {
            const element = document.getElementById(props.id);
            if(element !== null){
                if(!element.contains(e.target))
                    if(showView) onButtonClick();
            }
        });
        return document.removeEventListener('mousedown', onButtonClick);
    });

    const onButtonClick = () =>{
        if(showView){
            setShowView(false);
            props.onChange && props.onChange(false);
        }
        else{
            setShowView(true);
            props.onChange && props.onChange(true);
        }
    }

    return(
        <Container
            id={props.id}
            data-testid="menu-list"
            style={props.style}
        >
            <Button
                design='image'
                label=""
                icon={props.icon ? props.icon : <MoreVertical/>}
                onClick={onButtonClick}
            />
            {showView &&
                <FilterView
                    position={props.position}
                    style={props.menuStyle}
                >
                    {props.children}
                </FilterView>
            }
        </Container>
    )
})
export default MenuList;
export interface MenuProps{
    id: string,
    children?: any,
    style?: any,
    menuStyle?: any,
    icon?: JSX.Element,
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left',
    onChange?: (visible: boolean) => void
}
export interface MenuRef{
    close: () => void
}