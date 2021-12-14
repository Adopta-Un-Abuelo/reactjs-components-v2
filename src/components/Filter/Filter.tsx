import React, { useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';
import P from '../Text/P';

const Container = styled.div`

`
const Button = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 40px;
	padding: 0px 16px;
	border-radius: 20px;
	border: ${props => props.disabled ? '1px solid '+ Color.gray3 : '1px solid '+ Color.gray4};
	color: ${props => props.disabled ? Color.gray3 : Color.gray1};
	background-color: transparent;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? 'transparent' : Color.gray4+'30'};
	}
`
const FilterView = styled.div`
    background-color: red;
`

const Filter = (props: Props) =>{

    const [ showView, setShowView ] = useState(false);

    return(
        <Container>
            <Button
                disabled={props.disabled}
                onClick={() => setShowView(!showView)}
            >
                <P>
                    {props.label}
                </P>
            </Button>
            {showView &&
                <FilterView>

                </FilterView>
            }
        </Container>
    )
}
export default Filter;
export interface Props{
    label: string,
    disabled?: boolean,
    design?: 'single' | 'multiple' | 'ratio'
}