import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.css'
import ButtonEditor from '../Button/ButtonEditor'
import { convertToRaw, EditorState, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
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
    const [ editorState, setEditorState] = useState<any>(undefined);
    const [value, setValue] = useState<any>(undefined)
    
    useEffect(()=>{
        if(props.value && props.type==="edit"){
            setEditorState(EditorState.createWithContent(
                ContentState.createFromBlockArray(
                  convertFromHTML(props.value)
                )
              ))
            
        }
        else if(props.value) setValue(props.value)
     },[props.value])

     const onTextAreChange = (value?:string, data?:any) => {
        let result = value?value: draftToHtml(convertToRaw(data.getCurrentContent()))
        if(data) setEditorState(data)
        setValue(result)
        props.onChange && props.onChange(result)
    }
    return(<>{
            props.type==="edit" ? 
            <Editor  editorState= {editorState}
            onEditorStateChange={(data)=>{onTextAreChange(undefined, data)}} placeholder={props.placeholder} toolbar={{
                options: ['emoji'],
              }} toolbarCustomButtons={[
                <ButtonEditor text="B" type={{control:"inline", value:"BOLD"}}/>, 
                <ButtonEditor style={{"font-style": "italic"}} text="I" type={{control:"inline", value:"ITALIC"}}/>,
                <ButtonEditor style={{"text-decoration":"underline"}} text="U" type={{control:"inline", value:"UNDERLINE"}}/>, 
                <ButtonEditor style={{"text-decoration": "line-through"}} text="S" type={{control:"inline", value:"STRIKETHROUGH"}}/>, 
                <ButtonEditor text="H1" type={{control:"blockType", value:"header-one"}}/>, 
            ]}  wrapperClassName="wrapper" editorClassName="editor" toolbarClassName="toolbar" />:
            <TextAreaView value={props.value} onChange={(e)=>{onTextAreChange(e.target.value)}} data-testid="text_area"style={style} placeholder={props.placeholder}/>
        }
        </>
        
    )
} 
export default TextArea;
export interface Props extends ComponentPropsWithoutRef<"textarea">{
    value?: string,
    placeholder?:string
    type?: "normal" | "edit"
}


