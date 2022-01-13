import ReactDOM from "react-dom";
import styled from "styled-components";
import React, { ComponentPropsWithoutRef } from 'react';

const RadioButtonView = styled.input`
  background: #5963F6;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-width: 5px;
  :disabled{
    background-color: #BDBDBD;
  }


`;

const RadioButton = (props: Props) =>{
    return(
        <RadioButtonView type="radio"/>
    )
}
export default RadioButton;
export interface Props extends ComponentPropsWithoutRef<"input">{
   labeled?: string
}