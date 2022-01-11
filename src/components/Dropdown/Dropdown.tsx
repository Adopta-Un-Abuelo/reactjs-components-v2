import React, { ComponentPropsWithoutRef, useState } from 'react';
import styled from 'styled-components';
import P from '../Text/P'
import Color from '../../constants/Color';

import { ChevronDown, ChevronUp, User } from 'react-feather';

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    left: 0%;
    right: 16.14%;
    top: 0%;
    bottom: 0%;
    background: ${Color.gray6};
    border-radius: 40px;
    position: relative;
`
const Text = styled.div`
    display: flex;
    width: 80%;
    margin-left: 40px;
    align-items: center;
`;
const IconDiv =  styled.div`
    position: absolute;
    display: flex;
    align-items: center;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 110%;
    height: auto;
    bottom: -370%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    overflow-y: auto;
`;
const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    position: static;
    width: 98%;
    height: 40px;
    left: 4px;
    top: 4px;
    background: #FFFFFF;
`;
const Dropdown = (props: Props) =>{
    const [ open, setOpen] = useState(false)
    const [ selected, setSelected] = useState(undefined)

    return(
        <DropdownContainer {...props}>
            <IconDiv>
                {selected && selected.logo ?  selected.logo : <User style={{stroke:`${Color.gray3}`}}/>}
            </IconDiv>
            <Text>
                <P style={{color:`${Color.gray2}`}}>{selected? selected.name: "None"}</P>
            </Text>
            <IconDiv style={{right:8}} onClick={()=>setOpen(!open)}>
                {open ?  <ChevronUp style={{stroke:`${Color.gray3}`}}/>:<ChevronDown style={{stroke:`${Color.gray3}`}}/>} 
            </IconDiv>
            {
                open && <Menu>
                    <Option>
                    <IconDiv>
                        {selected && selected.logo ?  selected.logo : <User style={{stroke:`${Color.gray3}`}}/>}
                    </IconDiv>
                    </Option>
                
                </Menu>
            }
        </DropdownContainer>
    )
}
export default Dropdown;
export interface Props extends ComponentPropsWithoutRef<"div">{
}