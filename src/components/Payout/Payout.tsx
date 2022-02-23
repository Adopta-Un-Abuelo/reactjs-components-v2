import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentMethod } from "@stripe/stripe-js";

import Color from '../../constants/Color';
import { isLessThan } from '../../constants/Screen';

import PaycardForm from '../Form/PaycardForm';
import PaycardIcon from '../../assets/images/Paycard';
import IconTabs from '../Tabs/IconTabs';
import BrandPaycardIcon from '../../assets/logo/Paycard';
import WebModal from '../Modal/WebModal';

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

const Payout = (props: Props) =>{

    const modal = useRef();
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

    const onFormSubmit = (paymentMethod: PaymentMethod | undefined) =>{
        props.onFinish && props.onFinish(paymentMethod);
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
            {showConfirmModal &&
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
                    option={option}
                    style={props.cardStyle}
                    onFinish={onFormSubmit}
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
}
export default Payout;
export interface Props{
    stripeKey: string,
    stripeConfirmUrl: string,
    paymentOptions: ['sepa_debit', 'card'] | ['card'] | ['sepa_debit'],
    style?: any,
    cardStyle?: any,
    error?: boolean,
    onSetupConfirmed?: () => void
    onFinish?: (a: PaymentMethod | undefined) => void,
    onLoading?: (a: boolean) => void
}