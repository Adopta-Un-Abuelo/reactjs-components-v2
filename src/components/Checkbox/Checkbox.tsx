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
    cursor: pointer;
    padding: 0px;
`
const Box = styled.div<{selected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    background-color: ${props => props.selected ? Color.blue3 : Color.gray6};
    border-radius: 8px;
    margin-right: 10px;
`

const Checkbox = (props: Props) =>{

    const [ selected, setSelected ] = useState(props.selected ? props.selected : false);

    useEffect(() =>{
        setSelected(props.selected ? props.selected : false);
    },[props.selected]);

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        setSelected(!selected);
        props.onClick && props.onClick(event);
    }

    return(
        <Container
            onClick={onClick}
        >
            <Box
                selected={selected}
            >
                {selected &&
                    <Check height={18} width={18} stroke='white'/>
                }
            </Box>
            <P>
                Hola
            </P>
        </Container>
    )
}
export default Checkbox;
export interface Props extends ComponentPropsWithoutRef<"button">{
    selected?: boolean
}