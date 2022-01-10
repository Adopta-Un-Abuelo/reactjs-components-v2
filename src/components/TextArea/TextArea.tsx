import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants';

const TextAreaView = styled.textarea`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
    width: -webkit-fill-available;
    height: 100px;
    background: #F2F2F2;
    //Remove resize handle
    resize: none;
    //Remove default scrollbars
    overflow: auto;
    border-radius: 4px;
    :placeholder-shown{
        :focus{
            border: 1.5px solid #5963F6;
            cursor:text;
            outline: none !important;
        }
    }
    :hover{
        border: 1.5px solid #5963F6;
        cursor: pointer;
        outline: none !important;
    }
    :focus{
        border: 1.5px solid #5963F6;
        cursor:text;
        outline: none !important;
    }
    ::-webkit-scrollbar{
	width: 12px;
}
    ::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #E0E0E0;
    }
`




const TextArea = (props: Props) =>{
    const { style, ...restProps } = props;

    return(
        <TextAreaView data-testid="text_area"
        style={style} placeholder={props.placeholder}>
        </TextAreaView>
    )
} 
export default TextArea;
export interface Props extends ComponentPropsWithoutRef<"textarea">{
    text?: string,
    placeholder?:string
}