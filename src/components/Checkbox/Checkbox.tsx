import React, { useState, useEffect, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import P from '../Text/P';
import { Check } from 'react-feather';
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
const Box = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    background-color: ${props => props.selected ? Color.blue3 : Color.gray6};
    border-radius: 8px;
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
            >
                {selected &&
                    <Check height={18} width={18} stroke='white'/>
                }
            </Box>
            <TextView>
                <P>
                    {props.label}
                </P>
                {props.sublabel &&
                    <P
                        style={{fontSize: 12}}
                    >
                        {props.sublabel}
                    </P>
                }
            </TextView>
        </Container>
    )
}
export default Checkbox;
export interface Props extends ComponentPropsWithoutRef<"button">{
    selected: boolean,
    label: string,
    sublabel?: string
}