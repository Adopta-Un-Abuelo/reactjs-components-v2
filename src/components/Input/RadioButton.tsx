import styled from "styled-components";
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import Text from '../Text/Text'
import { Color } from '../../constants';
const RadioButtonContainer = styled.div`
  margin: 24px 0;
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items:center;
`
const RadioOuterCircle = styled.div`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  transition: all 0.1s linear;
`
const RadioInnerCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all 0.1s linear;
`


const RadioButton = (props: Props) =>{
  const [ selected, setSelected ] = useState(props.selected);

    useEffect(() =>{
        setSelected(props.selected);
    },[props.selected]);

  const onClick = (event:any) => {
    setSelected(!selected);
    props.onClick && props.onClick(event);
  }
  return(
    <RadioButtonContainer data-testid="radioButton"
      onClick={onClick}
    >
      <RadioOuterCircle style={{border: props.disabled ? `2px solid ${Color.gray4}`:` 2px solid ${Color.blue3}`}}>
        <RadioInnerCircle style={{background: selected? `${Color.blue3}`:"white"}}/>
      </RadioOuterCircle>
      <Text type='p' style={{color:`${Color.gray2}`}}>{props.text}</Text>
    </RadioButtonContainer>
  );
    
}
export default RadioButton;
export interface Props extends ComponentPropsWithoutRef<"div">{
   text?: string,
   value?:string,
   selected?:boolean,
   disabled?:boolean,
   onClick?: any
}