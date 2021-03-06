import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text'
import Color from '../../constants/Color';
import Avatar from '../Avatar/Avatar'
import { ChevronDown, ChevronUp, User } from 'lucide-react';

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
const TextS = styled.div`
    display: flex;
    width: 80%;
    margin-left: 40px;
    align-items: center;
`;
const IconDiv =  styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
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
    cursor: pointer;
`;
const Dropdown = (props: Props) =>{
    const [ open, setOpen] = useState(false)
    const [ selected, setSelected] = useState<any>(undefined)
    const [ data, setData] = useState<Array<any>>([])

    useEffect(()=>{
        if(props.data) setData(props.data)
        if(props.selected) setSelected(props.selected)
    },[props.data, props.selected])


    const onClickOption = (item:any)=>{
        setSelected(item);
        setOpen(!open)
        props.onChange && props.onChange(item);
    }
    return(
        <DropdownContainer data-testid="dropdown" {...props}>
            <IconDiv>
                {selected && selected.logo ?  selected.logo : selected ? <Avatar style={{height:24, width:24}} name={selected[props.title]} icon={selected.logo || selected.image}/>: <User style={{stroke:`${Color.gray3}`}}/>}
            </IconDiv>
            <TextS>
                <Text type='p' style={{color:`${Color.gray2}`}}>{selected? selected.name: "None"}</Text>
            </TextS>
            <IconDiv data-testid="svgMenu" style={{right:8}} onClick={()=>setOpen(!open)}>
                {open ?  <ChevronUp style={{stroke:`${Color.gray3}`}}/>:<ChevronDown style={{stroke:`${Color.gray3}`}}/>} 
            </IconDiv>
            
            {//****MENU****
                open && <Menu data-testid="menu">
                    {data.map((item, index)=>{
                        return (
                            <Option key={index} onClick={()=> onClickOption(item)} style={props.optionStyle}>
                                <div>
                                    <Avatar style={{height:24, width:24}} name={item[props.title]} icon={item.logo || item.image}/>
                                </div>
                                <Text type='p' style={{color:`${Color.gray2}`, marginLeft:10}}>{item[props.title]}</Text>
                            </Option>
                        )
                    })}
                </Menu>
            }
        </DropdownContainer>
    )
}
export default Dropdown;
export interface Props extends ComponentPropsWithoutRef<"div">{
    style?: any,
    optionStyle?: any,
    data?:Array<any>,
    title:string,
    selected?:any,
    onChange?: (a: any) => void
}