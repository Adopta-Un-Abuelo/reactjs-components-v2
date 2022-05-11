import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import { Check, X } from 'lucide-react';
import Text from '../Text/Text';
import { Color } from '../../constants';

const Container = styled.div<{type: 'success' | 'error'}>`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    min-width: 300px;
    max-width: 60%;
    left: 24px;
    bottom: 24px;
    background: ${props => props.type === 'success' ? Color.status.color.success : Color.status.color.error};
    box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`

const FeedBack = (props: Props) =>{
    return(
        <Container data-testid="feedback" {...props}>
            {props.type === 'success' ?
                <Check 
                    style={{marginRight:12}}
                    color={'white'}
                    height={24}
                    width={24}
                />
            :
                <X 
                    style={{marginRight:12}}
                    color={'white'}
                    height={24}
                    width={24}
                />
            }
            <Text type='p' style={{display: 'flex', flex: 1, color: 'white'}}>
                {props.text}
            </Text>
        </Container>
    )
}
export default FeedBack;
export interface Props extends ComponentPropsWithoutRef<"div">{
    type: 'success' | 'error',
    text: string
}