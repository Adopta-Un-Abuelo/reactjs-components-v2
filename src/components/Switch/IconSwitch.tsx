import { useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${Color.line.soft};
    width: fit-content;
    border-radius: 12px;
    overflow: hidden;
`
const Cell = styled.div<{selected: boolean}>`
    display: flex;
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${props => props.selected ? Color.background.primaryLow : 'transparent'};
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`

const IconSwitch = (props: Props) =>{

    const [ selectedOption, setSelectedOption ] = useState(props.options[0]);

    return(
        <Container
            style={props.style}
        >
            {props.options.map(item =>{
                const selected = item.id === selectedOption.id;
                return(
                    <Cell 
                        key={'switch'+item.id} 
                        selected={selected}
                        onClick={() => {
                            setSelectedOption(item);
                            props.onChange && props.onChange(item);
                        }}
                    >
                        <item.icon color={selected ? Color.text.primary : Color.text.high} height={20} width={20}/>
                    </Cell>
                )
            })}
        </Container>
    )
}
export default IconSwitch;
export interface Props{
    style?: any,
    options: Array<{
        id: string,
        icon: any
    }> 
    onChange?: (option: {
        id: string,
        icon: any
    }) => void
}