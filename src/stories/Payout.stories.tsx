import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useRef } from 'react';

import { Payout, Button } from '../components';
import { PayoutRef } from '../components/Payout/Payout';

export default {
	title: 'Basic/Payout',
	component: Payout
} as ComponentMeta<typeof Payout>;

const Template: ComponentStory<typeof Payout> = (args) => {
    const payout = useRef<PayoutRef>(null);
    return(
        <>
        <Payout ref={payout} {...args} />
        <Button
            style={{marginTop: 44}}
            label='Obtener payment method'
            onClick={async () => console.log(await payout.current?.getPaymentMethod())}
        />
        </>
    )
};

export const Default = Template.bind({});
Default.args = { 
    stripeKey: 'pk_test_dQq2KP56pzzgXpx0kD4vrwIl',
    stripeConfirmUrl: 'https://hooks.stripe.com/3d_secure_2/hosted?publishable_key=pk_test_dQq2KP56pzzgXpx0kD4vrwIl&setup_intent=seti_1I8lQmLxdcCX49cKQcOOqwzs&setup_intent_client_secret=seti_1I8lQmLxdcCX49cKQcOOqwzs_secret_IkFwhr6kDJipbYBMQ8XBnN9aETHI543&source=src_1I8lQnLxdcCX49cKgyq6YNFg',
    paymentOptions: ['card', 'sepa_debit']
}