import { ComponentPropsWithoutRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants';
import Text from '../Text/Text';

const LabelStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: fit-content;
    height: 28px;
    border-radius: 3px;
`
const Label = (props: Props) =>{

    const [ selectedColor, setSelectedColor ] = useState<{color: string, backgroundColor: string, text: string} | undefined>(undefined);

    useEffect(() =>{
        setSelectedColor(getColor());
    },[props.text]);

    const getColor = () =>{
        switch(props.text){
            case 'inRegister':
                return{
                    color: '#2D7FD9',
                    backgroundColor: '#E5F1FC',
                    text: 'En registro'
                }
            case 'registered':
                return{
                    color: '#2D7FD9',
                    backgroundColor: '#E5F1FC',
                    text: 'Registrado'
                }
            case 'subscriptor':
                return{
                    color: '#2D7FD9',
                    backgroundColor: '#E5F1FC',
                    text: 'Pendiente de match'
                }
            case 'training':
                return{
                    color: '#2D7FD9',
                    backgroundColor: '#E5F1FC',
                    text: 'Formación pendiente'
                }
            case 'match':
                return{
                    color: '#59C183',
                    backgroundColor: '#E7F6ED',
                    text: 'Match'
                }
            case 'shutdown':
                return{
                    color: '#FF5A5A',
                    backgroundColor: '#FCEDF1',
                    text: 'Baja'
                }
            case 'exSubscriptor':
                return{
                    color: '#FF5A5A',
                    backgroundColor: '#FCEDF1',
                    text: 'Ex-suscriptor'
                }
            case 'pause':
                return{
                    color: '#828282',
                    backgroundColor: '#F2F2F2',
                    text: 'Pausa'
                }
            case 'subscriptor':
                return{
                    color: '#FFAC4B',
                    backgroundColor: '#FFEFD4',
                    text: 'Suscriptor'
                }
            case 'pending':
                return{
                    color: '#FF8854',
                    backgroundColor: '#FFF6E5',
                    text: 'Pendiente'
                }
            case 'inProgress':
                return{
                    color: '#FF8854',
                    backgroundColor: '#FFF6E5',
                    text: 'En proceso'
                }
            case 'canceled':
                return{
                    color: Color.text.high,
                    backgroundColor: Color.background.soft,
                    text: 'Cancelado'
                }
            case 'done':
                return{
                    color: '#448B6D',
                    backgroundColor: '#E4F8EE',
                    text: 'Resuelto'
                }
        }
    }

    return(selectedColor ?
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: selectedColor.backgroundColor, ...props.style}}>
            <Text type='p' style={{fontSize: 14, fontWeight: 500, color: selectedColor.color}}>
                {selectedColor.text}
            </Text>
        </LabelStyled>
    :
        <LabelStyled data-testid="Label" id="Label" {...props} style={{background: props.backgroundColor ? props.backgroundColor: Color.background.soft, ...props.style}}>
            <Text type='p' style={{fontSize: 14, fontWeight: 500, color: props.color}}>
                {props.text}
            </Text>
        </LabelStyled>
    )
}
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text?: string,
    backgroundColor?:string,
    color?:string,
}