import React, { useState, useEffect, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import { Check } from 'lucide-react';
import { Color } from '../../constants';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    background: none;
    border: none;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    padding: 0px;
    opacity: ${props => props.disabled ? 0.5 : 1.0};
`
const Box = styled.div<{selected: boolean, error?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    min-height: 24px;
    min-width: 24px;
    background-color: ${props => props.selected ? (props.error ? Color.status.color.error : Color.background.primary) : (props.error ? Color.status.color.errorDefault : Color.background.primaryLow)};
    border: ${props => props.selected ? '1px solid '+(props.error ? Color.status.color.error : Color.background.primary) : '1px solid '+(props.error ? Color.line.redSoft : Color.line.primarySoft)};
    border-radius: 4px;
`
const TextView = styled.div`
    margin-left: 10px;
    text-align: left;
`

const Checkbox = (props: Props) =>{

    const [ selected, setSelected ] = useState(props.selected);

    useEffect(() =>{
        setSelected(props.selected);
    },[props.selected]);

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        setSelected(!selected);
        props.onClick && props.onClick(event);
    }

    return(
        <Container
            data-testid="checkbox"
            onClick={onClick}
            {...props}
        >
            <Box
                selected={selected}
                error={props.error}
            >
                {selected &&
                    <Check 
                        data-testid="check-icon"
                        height={20} 
                        width={20}
                        color='white'
                        strokeWidth={2}
                    />
                }
            </Box>
            <TextView>
                {props.children && props.children}
                {props.label &&
                    <Text
                        type='p'
                    >
                        {props.label}
                    </Text>
                }
                {props.sublabel &&
                    <Text
                        type='p'
                        style={{fontSize: 12}}
                    >
                        {props.sublabel}
                    </Text>
                }
            </TextView>
        </Container>
    )
}
export default Checkbox;
export interface Props extends ComponentPropsWithoutRef<"button">{
    selected: boolean,
    label?: string,
    sublabel?: string,
    error?: boolean
}