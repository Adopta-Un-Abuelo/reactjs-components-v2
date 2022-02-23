import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CardElement, useElements, useStripe, IbanElement } from '@stripe/react-stripe-js';
import { StripeElementChangeEvent, PaymentMethod } from "@stripe/stripe-js";

import Color from '../../constants/Color';
import Input from '../Input/Input';
import Text from '../Text/Text';

const InputContainer = styled.div<{error?: boolean, focus: boolean}>`
    border: ${props => props.error ? '1px solid red' : (props.focus ? '1px solid '+Color.gray3 : 'none')};
    border-radius: 24px;
    padding: 22px;
    background-color: ${props => props.focus ? 'white' : Color.gray6};
`

const PayoutForm = (props: Props) =>{

    const [ name, setName ] = useState<string | undefined>(undefined);
    const [ inputError, setInputError ] = useState(props.error);
    const [ inputFocus, setInputFocus ] = useState(false);

    const container = useRef<HTMLDivElement | null>(null);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        setInputError(props.error);
    }, [props.error]);

    const onPaymentChange = async (payment: StripeElementChangeEvent) =>{
        setInputError(false);
        if(elements && stripe){
            if(payment.complete){
                if(payment.elementType === 'iban'){
                    props.onLoading && props.onLoading(true);
                    const ibanElement = elements.getElement(IbanElement);
                    if(ibanElement && name){
                        const {error, paymentMethod} = await stripe.createPaymentMethod({
                            type: 'sepa_debit',
                            sepa_debit: ibanElement,
                            billing_details:{
                                name: name,
                                email: 'email@sdd.es'   //FIXME
                            }
                        });
                        if (error) {
                            console.error(error);
                            props.onLoading && props.onLoading(false);
                            props.onFinish && props.onFinish(undefined);
                        } 
                        else {
                            props.onLoading && props.onLoading(false);
                            props.onFinish && props.onFinish(paymentMethod);
                        }
                    }
                }
                else{
                    props.onLoading && props.onLoading(true);
                    const cardElement = elements.getElement(CardElement);
                    if(cardElement){
                        const {error, paymentMethod} = await stripe.createPaymentMethod({
                            type: 'card',
                            card: cardElement,
                            billing_details:{
                                name: name
                            }
                        });
                        if (error) {
                            console.error(error);
                            props.onLoading && props.onLoading(false);
                            props.onFinish && props.onFinish(undefined);
                        } 
                        else {
                            props.onLoading && props.onLoading(false);
                            props.onFinish && props.onFinish(paymentMethod);
                        }
                    }
                }
            }
            else{
                props.onFinish && props.onFinish(undefined);
            }
        }
        else{
            props.onLoading && props.onLoading(false);
            props.onFinish && props.onFinish(undefined);
        }
    }

    const onInputChange = (value: string) =>{
        setInputError(false);
        setName(value);
    }

    const onInputFocus = () =>{
        setInputFocus(true);
    }

    const onInputBlur = () =>{
        setInputFocus(false);
    }

    return(
        <div
            ref={container}
            style={props.style}
        >
            <Input
                title={(container && container.current && container.current.offsetWidth <= 400) ? 'Titular' : (props.placeholderName ? props.placeholderName : 'Nombre del titular')}
                placeholder={props.placeholderName ? props.placeholderName : 'Nombre del titular'}
                style={{marginBottom: 12}}
                onChange={(e) => onInputChange(e.target.value)}
                error={inputError ? 'Error' : ""}
            />
            <InputContainer
                error={inputError}
                focus={inputFocus}
            >
                {props.option === 'card' ?
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontWeight: 500,
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    '::placeholder': {color: 'rgba(0, 0, 0, 0.3)'},
                                }
                            },
                            hidePostalCode: true
                        }}
                        onChange={onPaymentChange}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                    />
                :
                    <IbanElement
                        options={{
                            supportedCountries: ['SEPA'],
                            style: {
                                base: {
                                    fontWeight: 500,
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    '::placeholder': {color: 'rgba(0, 0, 0, 0.3)'},
                                }
                            }
                        }}
                        onChange={onPaymentChange}
                    />
                }
            </InputContainer>
            <Text
                type='p'
                style={{fontSize: 12, color: Color.gray4, marginTop: 8}}
            >
                {props.option === 'card' ?
                    'El pago con tarjeta está protegido por nuestra pasarela de pago seguro'
                :
                    'Recuerda que debes añadir el IBAN (Ej.: ES1212341234110123456789)'
                }
            </Text>
        </div>
    )
}
export default PayoutForm;
export interface Props{
    style?: any,
    option: 'card' | 'sepa_debit',
    error?: boolean,
    placeholderName?: string,
    onLoading?: (a: boolean) => void,
    onFinish?: (a: PaymentMethod | undefined) => void
}