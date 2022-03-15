import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, Ref } from 'react';
import styled from 'styled-components';
import { CardElement, useElements, useStripe, IbanElement } from '@stripe/react-stripe-js';
import { StripeElementChangeEvent, PaymentMethod } from "@stripe/stripe-js";

import Color from '../../constants/Color';
import Input from '../Input/Input';

const InputContainer = styled.div<{error?: boolean, focus: boolean}>`
    border: ${props => props.focus ? '2px solid '+Color.line.primarySoft : '1px solid '+Color.line.soft};
    border-radius: 12px;
    padding: 17px 22px;
    background-color: white;
`

const PayoutForm = forwardRef((props: FormProps, ref: Ref<FormRef>) =>{

    const [ name, setName ] = useState<string | undefined>(undefined);
    const [ email, setEmail ] = useState<string | undefined>(undefined);
    const [ inputError, setInputError ] = useState(props.error);
    const [ inputFocus, setInputFocus ] = useState(false);
    const [ paymentMethod, setPaymentMethod ] = useState<StripeElementChangeEvent | undefined>(undefined);

    const container = useRef<HTMLDivElement | null>(null);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        setInputError(props.error);
    }, [props.error]);

    useEffect(() =>{
        if(props.userData && props.userData.email)
            setEmail(props.userData.email);
        else
            setEmail(undefined);
    }, [props.userData]);

    useImperativeHandle(ref, () => ({
        async getPaymentMethod(){
            return await createPaymentMethod();
        }
    }));

    const onPaymentChange = async (payment: StripeElementChangeEvent) =>{
        setInputError(false);
        if(payment.complete){
            setPaymentMethod(payment);
        }
        else{
            setPaymentMethod(undefined);
        }
    }

    const createPaymentMethod = async () =>{
        if(elements && stripe && paymentMethod && name){
            if(paymentMethod.elementType === 'iban'){
                props.onLoading && props.onLoading(true);
                const ibanElement = elements.getElement(IbanElement);
                if(ibanElement && email){
                    const {error, paymentMethod} = await stripe.createPaymentMethod({
                        type: 'sepa_debit',
                        sepa_debit: ibanElement,
                        billing_details:{
                            name: name,
                            email: email
                        }
                    });
                    if (error) {
                        console.error(error);
                        props.onLoading && props.onLoading(false);
                        return undefined;
                    } 
                    else {
                        props.onLoading && props.onLoading(false);
                        return paymentMethod;
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
                        return undefined;
                    } 
                    else {
                        props.onLoading && props.onLoading(false);
                        return paymentMethod;
                    }
                }
            }
        }
        else{
            setInputError(true);
            return undefined;
        }
    }

    const onInputChange = (value: string) =>{
        setInputError(false);
        setName(value);
    }

    const onEmailInputChange = (value: string) =>{
        setInputError(false);
        setEmail(value);
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
                containerStyle={{marginBottom: 12}}
                onChange={(e) => onInputChange(e.target.value)}
                error={inputError ? 'Error' : undefined}
            />
            {props.option === 'sepa_debit' && !props.userData?.email &&
                <Input
                    title={props.placeholderEmail ? props.placeholderEmail : 'Email'}
                    placeholder={props.placeholderEmail ? props.placeholderEmail : 'Email'}
                    containerStyle={{marginBottom: 12}}
                    onChange={(e) => onEmailInputChange(e.target.value)}
                    error={inputError ? 'Error' : undefined}
                />
            }
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
                                    '::placeholder': {color: Color.text.high},
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
                                    '::placeholder': {color: Color.text.high},
                                }
                            }
                        }}
                        onChange={onPaymentChange}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                    />
                }
            </InputContainer>
        </div>
    )
});
export default PayoutForm;
export interface FormProps{
    style?: any,
    option: 'card' | 'sepa_debit',
    error?: boolean,
    placeholderName?: string,
    placeholderEmail?: string,
    userData?:{
        email?: string
    }
    onLoading?: (a: boolean) => void
}
export interface FormRef{
    getPaymentMethod: () => Promise<PaymentMethod | undefined>
}