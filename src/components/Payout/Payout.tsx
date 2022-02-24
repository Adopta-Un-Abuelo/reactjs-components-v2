import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, Ref } from 'react';
import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentMethod } from "@stripe/stripe-js";

import Color from '../../constants/Color';
import { isLessThan } from '../../constants/Screen';

import PaycardForm, { FormRef } from '../Form/PaycardForm';
import PaycardIcon from '../../assets/images/Paycard';
import IconTabs from '../Tabs/IconTabs';
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
    const stripePromise = loadStripe(props.stripeKey);
    const isMobile = isLessThan('mobileL');

    const [ option, setOption ] = useState<any>('sepa_debit');
    const [ showConfirmModal, setShowConfirmModal ] = useState(false);
    const [ paymentOptions, setPaymentOptions ] = useState([
        {
            id: 'sepa_debit',
            title: isMobile ? 'Banco' : 'Cuenta bancaria',
            icon: PaycardIcon
        },
        {
            id: 'card',
            title: 'Tarjeta',
            icon: PaycardIcon
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
                        title: isMobile ? 'Banco' : 'Cuenta bancaria',
                        icon: PaycardIcon
                    }
                }
                else if(item === 'card'){
                    return {
                        id: 'card',
                        title: 'Tarjeta',
                        icon: PaycardIcon
                    }
                }
                else{
                    return {
                        id: 'card',
                        title: 'Tarjeta',
                        icon: PaycardIcon
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
                    title: isMobile ? 'Banco' : 'Cuenta bancaria',
                    icon: PaycardIcon
                },
                {
                    id: 'card',
                    title: 'Tarjeta',
                    icon: PaycardIcon
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
            {showConfirmModal && props.stripeConfirmUrl &&
                <WebModal
                    ref={modal}
                    hideClose={true}
                    url={props.stripeConfirmUrl}
                    style={{width: 600, height: 400, padding: 0}}
                    onClose={onModalClose}
                />
            }
            <IconTabs
                style={{marginBottom: 12}}
                options={paymentOptions}
                onChange={onTabsChange}
            />
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
                />
            </Elements>
            {option === 'card' &&
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
    onSetupConfirmed?: () => void
    onLoading?: (a: boolean) => void
}
export interface PayoutRef{
    getPaymentMethod: () => Promise<PaymentMethod | undefined>
}