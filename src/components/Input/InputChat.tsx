import { ComponentPropsWithoutRef, useState, useRef } from 'react';
import styled from 'styled-components';

import { Send } from 'lucide-react';
import { Color } from '../../constants';
import Button from '../Button/ButtonImage';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    border-radius: 100px;
    border: 1px solid ${Color.line.soft};
    padding: 0px 20px;
`
const Input = styled.input`
    display: flex;
    flex: 1;
    font-family: 'Poppins';
    font-size: 14px;
    border: none;
    color: ${Color.text.full};
    :focus{
        outline: none;
    }
`
const InputChat = (props: Props) =>{

    const input = useRef<HTMLInputElement>(null);
    const [ text, setText ] = useState("");

    const { style, ...rest} = props;

    const onChange = (e: any) =>{
        setText(e.target.value);
        props.onChange && props.onChange(e);
    }

    const onSend = () =>{
        if(text){
            props.onSend && props.onSend(text);
            setText("");
        }
    }

    const onKeyDown = (e: any) =>{
        if (e.key === 'Enter') {
            onSend();
        }
        props.onKeyDown && props.onKeyDown(e);
    }

    return(
        <Container
            style={style}
        >
            <Input
                {...rest}
                value={text}
                ref={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <Button
                disabled={!text}
                icon={<Send height={20} width={20} color={Color.text.full}/>}
                onClick={onSend}
            />
        </Container>
    )
}
export default InputChat;
export interface Props extends ComponentPropsWithoutRef<"input">{
    onSend: (text: string) => void
}