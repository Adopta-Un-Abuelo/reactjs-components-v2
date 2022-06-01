import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, Ref } from 'react';
import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentMethod } from "@stripe/stripe-js";

import Color from '../../constants/Color';
import { isLessThan } from '../../constants/Screen';

import PaycardForm, { FormRef } from '../Form/PaycardForm';
import Tabs from '../Tabs/Tabs';
import BrandPaycardIcon from '../../assets/logo/Paycard';
import WebModal from '../Modal/WebModal';
import { ModalRef } from '../Modal/Modal';

const Container = styled.div`
`
const InfoView = styled.div`
	display: flex;
	flex: 1;
	margin-top: 24px;
	padding-top: 18px;
	border-top: 1px solid ${Color.gray5};
	background-color: white;
`

const Payout = forwardRef((props: PayoutProps, ref: Ref<PayoutRef>) =>{

    const modal = useRef<ModalRef>(null);
    const form = useRef<FormRef>(null);
    const isMobile = isLessThan('mobileL');

    const [ stripePromise, setStripePromise] = useState(() => loadStripe(props.stripeKey))
    const [ option, setOption ] = useState<any>('sepa_debit');
    const [ showConfirmModal, setShowConfirmModal ] = useState(false);
    const [ paymentOptions, setPaymentOptions ] = useState([
        {
            id: 'sepa_debit',
            title: isMobile ? 'Banco' : 'Cuenta bancaria'
        },
        {
            id: 'card',
            title: 'Tarjeta'
        }
    ]);

    useImperativeHandle(ref, () => ({
        async getPaymentMethod(){
            return await form.current?.getPaymentMethod();
        }
    }));

    useEffect(() => {
        if(props.stripeConfirmUrl) setShowConfirmModal(true);
        else handlerShowConfirmUrl();
    },[props.stripeConfirmUrl]);

    useEffect(() =>{
        if(props.paymentOptions){
            const temp = props.paymentOptions.map(item =>{
                if(item === 'sepa_debit'){
                    return {
                        id: 'sepa_debit',
                        title: isMobile ? 'Banco' : 'Cuenta bancaria'
                    }
                }
                else if(item === 'card'){
                    return {
                        id: 'card',
                        title: 'Tarjeta'
                    }
                }
                else{
                    return {
                        id: 'card',
                        title: 'Tarjeta'
                    }
                }
            })
            setPaymentOptions(temp);
            setOption(temp[0].id);
        }
        else{
           setPaymentOptions([
                {
                    id: 'sepa_debit',
                    title: isMobile ? 'Banco' : 'Cuenta bancaria'
                },
                {
                    id: 'card',
                    title: 'Tarjeta'
                }
            ])
            setOption('sepa_debit')
        }
    },[props.paymentOptions]);

    window.addEventListener('message', function(ev) {
        if (ev.data === '3DS-authentication-complete' && showConfirmModal) {
            handlerShowConfirmUrl();
        }
    }, false);

    const handlerShowConfirmUrl = ()=>{
        modal.current && modal.current.close();
    }

    const onModalClose = () =>{
        setShowConfirmModal(false);
        props.onSetupConfirmed && props.onSetupConfirmed();
    }

    const onLoading = (value: boolean) =>{
        props.onLoading && props.onLoading(value);
    }

    const onTabsChange = (item: {id: string}) =>{
        setOption(item.id);
    }

    return(
        <Container
            style={props.style}
        >
            <WebModal
                ref={modal}
                isVisible={showConfirmModal}
                hideClose={true}
                url={props.stripeConfirmUrl}
                style={{width: 600, height: 400, padding: 0}}
                onClose={onModalClose}
            />
            {paymentOptions.length > 1 &&
                <Tabs
                    style={{marginBottom: 12, width: isMobile ? 300 : 400}}
                    options={paymentOptions}
                    onChange={onTabsChange}
                />
            }
            <Elements 
                stripe={stripePromise}
                options={{
                    fonts: [{
                        cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
                    }]
                }}
            >
                <PaycardForm
                    ref={ref}
                    option={option}
                    style={props.cardStyle}
                    onLoading={onLoading}
                    error={props.error}
                    userData={props.userData}
                />
            </Elements>
            {option === 'card' && !props.hideDetails &&
                <InfoView>
                    <BrandPaycardIcon
                        brand={'visa'}
                        style={{height: 32, width: 'auto', marginRight: 8}}
                    />
                    <BrandPaycardIcon
                        brand={'mastercard'}
                        style={{height: 32, width: 'auto', marginRight: 8}}
                    />
                    <BrandPaycardIcon
                        brand={'amex'}
                        style={{height: 32, width: 'auto', marginRight: 8}}
                    />
                    <BrandPaycardIcon
                        brand={'discover'}
                        style={{height: 32, width: 'auto', marginRight: 8}}
                    />
                </InfoView>
            }
        </Container>
    )
});
export default Payout;
export interface PayoutProps{
    style?: any
    stripeKey: string,
    stripeConfirmUrl?: string,
    paymentOptions: Array<'sepa_debit' | 'card'>,
    cardStyle?: any,
    error?: boolean,
    hideDetails?: boolean,
    userData?:{
        email?: string
    }
    onSetupConfirmed?: () => void
    onLoading?: (a: boolean) => void
}
export interface PayoutRef{
    getPaymentMethod: () => Promise<PaymentMethod | undefined>
}