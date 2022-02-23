import React, { forwardRef, Ref, RefObject, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

import Modal, { ModalProps, ModalRef } from '../Modal/Modal';

const WebView = styled.iframe``

const WebModal = (props: WebModalProps) =>{

    return(
        <Modal
            style={{width: '80%', height: '80%'}}
            contentStyle={{padding: 0, width: '100%', height: '100%'}}
            {...props}
        >
            <WebView
                id={'web-iframe'}
                src={props.url} 
                width="100%" 
                height="100%"
                style={{border: 'none'}}
            />
        </Modal>
    )
}
export default WebModal;
export interface WebModalProps extends ModalProps{
    ref: RefObject<ModalRef>
    url: string
}