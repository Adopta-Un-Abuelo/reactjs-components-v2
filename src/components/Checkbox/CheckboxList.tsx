import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Container = styled.div`
`

const CheckboxList = (props: Props) =>{

    const [ selection, setSelection ] = useState(props.options.filter(e => e.defaultSelection));
    const [ update, setUpdate ] = useState(false);

    useEffect(() =>{
        if(props.selectedOptions)
            setSelection(props.selectedOptions);
    },[props.selectedOptions]);

    const onClick = (item: any) =>{
        const result = selection.findIndex(obj => item.id === obj.id);
        let tempArray = selection;
        if(props.selection === 'single') tempArray = [item];
        else if(result === -1)
            tempArray.push(item);
        else
            tempArray.splice(result, 1);
        setSelection(tempArray);
        setUpdate(!update);
        props.onChange && props.onChange(tempArray);
    }

    return(
        <Container data-testid="checkboxlist" style={props.style}>
            {props.options.map(item => {
                const active = selection.some(e => e.id === item.id);
                return(
                    <Checkbox
                        key={item.id}
                        style={{marginBottom: 16}}
                        label={item.label}
                        sublabel={item.sublabel}
                        error={item.error}
                        selected={active}
                        height={props.height}
                        width={props.width}
                        onClick={() => onClick(item)}
                    >
                        {item.Element}
                    </Checkbox>
                )
            })}
        </Container>
    )
}
export default CheckboxList;
export interface Props{
    style?: any,
    options: Array<{
        id: string,
        label?: string,
        sublabel?: string,
        defaultSelection?: boolean,
        Element?: JSX.Element,
        error?: boolean
    }>,
    selectedOptions?: Array<{
        id: string
    }>
    height?: number,
    width?: number
    selection: 'single' | 'multiple',
    onChange?: Function
}