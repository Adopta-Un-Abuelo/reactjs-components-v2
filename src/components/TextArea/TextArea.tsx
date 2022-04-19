import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.css'
import ButtonEditor from '../Button/ButtonEditor'
import Color from '../../constants/Color'
import { convertToRaw, EditorState, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const TextAreaView = styled.textarea`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px;
    width: -webkit-fill-available;
    height: 100px;
    font-family: 'Poppins';
    font-size: 16px;
    margin: 0px;
    border-radius: 12px;
    color: ${Color.gray2};
    //Remove resize handle
    resize: none;
    //Remove default scrollbars
    overflow: auto;
    border: 1px solid ${Color.line.soft};
    :placeholder-shown{
        :focus{
            border: 2px solid ${Color.line.primarySoft};
            cursor:text;
            outline: none !important;
        }
    }
    :hover{
        cursor: pointer;
        outline: none !important;
    }
    :focus{
        border: 2px solid ${Color.line.primarySoft};
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
    const [ editorState, setEditorState] = useState<any>(undefined);
    
    useEffect(()=>{
        if(props.value && props.type==="edit"){
            let convert = convertFromHTML(props.value)
            setEditorState(EditorState.createWithContent(
                ContentState.createFromBlockArray(convert.contentBlocks,convert.entityMap)
              ))
            
        }
     },[props.value])

     const onTextAreChange = (value?:React.ChangeEvent<HTMLTextAreaElement>, data?:any) => {
        let result:any = undefined;
        if(value) result= value
        else {
            let convert= draftToHtml(convertToRaw(data.getCurrentContent()))
            result = {
                target:{
                    name:props.name,
                    value: convert
                }
            }
        }
        
        if(data) setEditorState(data)
        props.onChange && props.onChange(result)
    }
    return(<>{
            props.type==="edit" ? 
            <Editor  editorState= {editorState}
            onEditorStateChange={(data:any)=>{onTextAreChange(undefined, data)}} placeholder={props.placeholder} toolbar={{
                options: ['emoji'],
              }} toolbarCustomButtons={[
                <ButtonEditor text="B" type={{control:"inline", value:"BOLD"}}/>, 
                <ButtonEditor style={{"font-style": "italic"}} text="I" type={{control:"inline", value:"ITALIC"}}/>,
                <ButtonEditor style={{"text-decoration":"underline"}} text="U" type={{control:"inline", value:"UNDERLINE"}}/>, 
                <ButtonEditor style={{"text-decoration": "line-through"}} text="S" type={{control:"inline", value:"STRIKETHROUGH"}}/>, 
                <ButtonEditor text="H1" type={{control:"blockType", value:"header-one"}}/>, 
            ]}  wrapperClassName="wrapper" editorClassName="editor" toolbarClassName="toolbar" />:
            <TextAreaView value={props.value} name={props.name} onChange={onTextAreChange} data-testid="text_area"style={style} placeholder={props.placeholder}/>
        }
        </>
        
    )
} 
export default TextArea;
export interface Props extends ComponentPropsWithoutRef<"textarea">{
    value?: string,
    placeholder?:string,
    type?: "normal" | "edit"
}


