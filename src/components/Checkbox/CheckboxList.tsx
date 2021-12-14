import { useState } from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const Container = styled.div`
`

const CheckboxList = (props: Props) =>{

    const [ selection, setSelection ] = useState<Array<{id: string}>>([]);
    const [ update, setUpdate ] = useState(false);

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
        <Container>
            {props.options.map(item => {
                const active = selection.some(e => e.id === item.id);
                return(
                    <Checkbox
                        key={item.id}
                        style={{marginBottom: 16}}
                        label={item.label}
                        sublabel={item.sublabel}
                        selected={active}
                        onClick={() => onClick(item)}
                    />
                )
            })}
        </Container>
    )
}
export default CheckboxList;
export interface Props{
    options: Array<{
        id: string,
        label: string,
        sublabel?: string,
        selected?: boolean
    }>,
    selection: 'single' | 'multiple',
    onChange?: Function
}