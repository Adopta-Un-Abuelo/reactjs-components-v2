import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MoreVertical } from 'lucide-react'; 
import Button from '../Button/Button';

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
    padding: 8px;
    border-radius: 4px;
    height: 278px;
    width: 320px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

const MenuList = (props: Props) =>{

    const [ showView, setShowView ] = useState(false);

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
                icon={<MoreVertical/>}
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
}
export default MenuList;
export interface Props{
    id: string,
    children?: JSX.Element,
    style?: any,
    menuStyle?: any,
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left',
    onChange?: (visible: boolean) => void
}