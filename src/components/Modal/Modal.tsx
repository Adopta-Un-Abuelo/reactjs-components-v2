import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button'
import { X } from 'react-feather'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    min-width: 353px;
    min-height: 170px;
    max-width: 700px;
    max-height: 800px;
    background: #FFFFFF;
    box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #4F4F4F;
    margin-bottom:16px;
    width: 95%;
`;

const Subtitle = styled.div`
    font-family: Poppins;
    margin-bottom:16px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #828282;
`;
const Buttons = styled.div`
    margin-top: auto;
    display: flex;
    bottom: 0;
    width: 100%;
    justify-content: flex-end;
`;
const ChildrenElements =  styled.div`
    width:100%; 
    margin-bottom:16px;
    /* >*{
        margin-bottom: 0px;
    } */
`;
const Modal = (props: Props) =>{

    const onClose = () =>{
        props.onClose && props.onClose();
    }

    const onSave = () => {
        props.onSave && props.onSave()
    }
    return(
       <Container data-testid="modal">
           <X style={{position:"absolute", alignSelf:"flex-end", cursor:"pointer"}}/>
           {props.title &&<Title>{props.title}</Title>}
           {props.subtitle &&<Subtitle>{props.subtitle}</Subtitle>}
           {props.children && <ChildrenElements>
                {props.children}
            </ChildrenElements>}
        <Buttons>
            <Button data-testid="close_but" onClick={onClose} style={{marginRight:8}} label={"Cancelar"} design={"text"}/>
            <Button disabled={props.disableButton} onClick={onSave} label={"Guardar"}/>
        </Buttons>
           
       </Container>
    )
}
export default Modal;
export interface Props extends ComponentPropsWithoutRef<"div">{
    title?:string,
    subtitle?:string,
    disableButton?:boolean,
    onClose?:()=>void,
    onSave?:()=>void
}