import React, { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button'
import Text from '../Text/Text'
import { X } from 'lucide-react'
import media from 'styled-media-query';
import Color from '../../constants/Color';

const Screen = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10000;
`;
const Container = styled.div`
    position: relative;
    min-width: 400px;
    max-width: 600px;
    max-height: 700px;
    background: #FFFFFF;
    box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    overflow:hidden;
    overflow-y: auto;
    ${media.lessThan("small")`
        min-width: 92%;
        max-width: 92%;
        max-height: 90%;
    `}
`;
const TitleView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;
`
const ChildrenView = styled.div`
    padding: 0px 24px;
`
const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    color: #4F4F4F;
    width: 95%;
    ${media.lessThan("small")`
        font-size: 22px;
    `}
`;
const Subtitle = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-top: 12px;
    color: #828282;
    ${media.lessThan("small")`
        font-size: 16px;
        margin-top: 8px;
    `}
`;
const Buttons = styled.div`
    position: sticky;
    display: flex;
    flex: 1;
    bottom: 0;
    align-items: center;
    padding: 16px 16px;
    border: 1px solid ${Color.line.soft};
    background-color: white;
    ${media.lessThan("small")`
        padding: 12px 16px;
    `}
`;

const Modal = forwardRef((props: ModalProps, ref: Ref<ModalRef>) =>{

    useImperativeHandle(ref, () => ({
        close(){
            onClose();
        }
    }));

    const onClose = () =>{
        props.onClose && props.onClose();
    }

    const onSave = () => {
        props.onSave && props.onSave()
    }
    return(
        <Screen>
            <Container style={props.style} data-testid="modal">
                {!props.hideHeader &&
                    <TitleView>
                        {!props.hideClose &&
                            <X onClick={onClose} style={{position:"absolute", alignSelf:"flex-end", cursor:"pointer"}}/>
                        }
                        {props.title &&
                            <Title>{props.title}</Title>
                        }
                        {props.subtitle &&
                            <Subtitle>{props.subtitle}</Subtitle>
                        }
                    </TitleView>
                }
                <ChildrenView
                    style={props.contentStyle}
                >
                    {props.children}
                </ChildrenView>
                {(props.onSave || props.onClose) &&
                    <Buttons>
                        {props.error && 
                            <Text type='p' style={{color:"red", fontSize:12}}>
                                {props.error}
                            </Text>
                        }
                        {props.onClose &&
                            <Button 
                                data-testid="close_but" 
                                onClick={onClose} 
                                style={{marginRight: 'auto'}} 
                                label={"Cancelar"} 
                                design={"text"}
                            />
                        }
                        {props.onSave &&
                            <Button disabled={props.disableButton} onClick={onSave} label={props.buttonLabel ? props.buttonLabel : "Guardar"}/>
                        }
                    </Buttons>
                }
            </Container>
        </Screen>
    )
})
export default Modal;
export interface ModalProps extends ComponentPropsWithoutRef<"div">{
    title?:string,
    subtitle?:string,
    disableButton?:boolean,
    error?:string,
    hideClose?: boolean,
    hideHeader?: boolean,
    contentStyle?: any,
    buttonLabel?: string
    onClose?:()=>void,
    onSave?:()=>void
}
export interface ModalRef{
    close: () => void
}