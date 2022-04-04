import React, { ComponentPropsWithoutRef, forwardRef, Ref, useImperativeHandle } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button'
import Text from '../Text/Text'
import { X } from 'lucide-react'
import media from 'styled-media-query';
import Color from '../../constants/Color';
import Modal from 'react-modal';

const TitleView = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    padding: 24px 24px 16px;
    top: 0px;
    background-color: white;
`
const ChildrenView = styled.div`
    padding: 0px 24px;
`
const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: ${Color.text.full};
    ${media.lessThan("small")`
        font-size: 22px;
    `}
`;
const Subtitle = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
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
    justify-content: flex-end;
    padding: 16px 16px;
    border: 1px solid ${Color.line.soft};
    background-color: white;
    ${media.lessThan("small")`
        padding: 12px 16px;
    `}
`;
const ErrorView = styled.div`
    padding: 12px 24px;
`

const ModalComponent = forwardRef((props: ModalProps, ref: Ref<ModalRef>) =>{

    useImperativeHandle(ref, () => ({
        close(){
            onClose();
        }
    }));

    const onClose = () =>{
        props.onClose && props.onClose();
    }

    return(
        <Modal
            isOpen={props.isVisible}
            onAfterClose={onClose}
            ariaHideApp={false}
            closeTimeoutMS={500}
            style={{
                content: {
                    position: 'relative',
                    minWidth: 400,
                    maxWidth: 600,
                    maxHeight: 700,
                    background: '#FFFFFF',
                    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.08)',
                    borderRadius: 12,
                    top: props.isVisible ? '50%' : '150%',
                    transition: 'top linear 200ms',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    overflow:'hidden',
                    overflowY: 'auto',
                    padding: 0
                },
                overlay:{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    opacity: props.isVisible ? 1 : 0,
                    transition: 'opacity linear 250ms'
                }
            }}
        >
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
                    {props.Header}
                </TitleView>
            }
            <ChildrenView
                style={props.contentStyle}
            >
                {props.children}
            </ChildrenView>
            {props.error && 
                <ErrorView>
                    <Text type='p' style={{color: Color.status.color.error, fontSize:12}}>
                        {props.error}
                    </Text>
                </ErrorView>
            }
            {props.buttonProps &&
                <Buttons>
                    {props.buttonProps &&
                        <Button 
                            label={"Guardar"}
                            style={{ height: 40, paddingLeft: 14, paddingRight: 14 }}
                            {...props.buttonProps}
                        />
                    }
                </Buttons>
            }
        </Modal>
    )
})
export default ModalComponent;
export interface ModalProps extends ComponentPropsWithoutRef<"div">{
    isVisible: boolean,
    title?:string,
    subtitle?:string,
    error?:string,
    hideClose?: boolean,
    hideHeader?: boolean,
    contentStyle?: any,
    onClose:()=>void,
    Header?: JSX.Element,
    buttonProps?: {
        label?: string,
        onClick?: () => void,
        disabled?: boolean,
        loading?: boolean
    }
}
export interface ModalRef{
    close: () => void
}