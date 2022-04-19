import React, { RefObject } from 'react';
import styled from 'styled-components';

import Modal, { ModalProps, ModalRef } from '../Modal/ModalV2';

const WebView = styled.iframe``

const WebModal = (props: WebModalProps) =>{

    return(
        <Modal
            contentStyle={{padding: 0, height: '70vh'}}
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
    url?: string
}