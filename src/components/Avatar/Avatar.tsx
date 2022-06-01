import { ComponentPropsWithoutRef, useRef, useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';
import Modal from '../Modal/ModalV2';

const AvatarContainer = styled.div<{editable?: boolean, clickable?: boolean}>`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    background-color: ${Color.background.primaryLow};
    cursor: ${props => (props.editable || props.clickable) ? 'pointer' : 'default'};
`
const Text = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 25.4545px;
    line-height: 40px;
    color: ${Color.text.primary};
    text-align: center;
`
const Icon = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`
const BigIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Avatar = (props: Props) =>{

    const inputFile = useRef<HTMLInputElement>(null) 
    const [ showModal, setShowModal ] = useState(false);
    
    const onButtonClick = () => {
        if(props.editable)
            inputFile.current?.click();
        else if(props.clickable)
            setShowModal(true);
    }

    const onInputChange = async (e: any) =>{
        if(e.target && e.target.files && e.target.files[0]){
            if(!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
                alert('Debes seleccionar una imagen')
            }
            else{
                const file = await toBase64(e.target.files[0]);
                props.onChange && props.onChange(file);
            }
		}
    }

    const toBase64 = (file: any) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

    return(
        <>
        <Modal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            contentStyle={{padding: 0, backgroundColor: 'black'}}
            hideHeader={true}
            buttonProps={{
                label: 'Cerrar',
                onClick: () => setShowModal(false)
            }}
        >
            <BigIcon src={props.icon}/> 
        </Modal>
        <AvatarContainer 
            data-testid="avatar" 
            style={props.style} 
            editable={props.editable}
            clickable={props.clickable}
            onClick={onButtonClick}
        >
            <input 
                ref={inputFile}
                id='file'
                type='file' 
                accept="image/x-png,image/gif,image/jpeg" 
                style={{display: 'none'}} 
                onChange={onInputChange}
            />
            {props.icon ?
                <Icon src={props.icon}/> 
            : props.name ? 
                <Text style={{fontSize: props.style?.fontSize ? props.style.fontSize : 24, fontWeight: 600}}>
                    {props.name.substring(0,1).toLocaleUpperCase()}
                </Text>
            :null}
        </AvatarContainer>
        </>
    )
}
export default Avatar;
export interface Props extends ComponentPropsWithoutRef<"div">{
    icon?: any,
    name?:string,
    editable?: boolean
    clickable?: boolean
    onChange?: (file: any) => void
}