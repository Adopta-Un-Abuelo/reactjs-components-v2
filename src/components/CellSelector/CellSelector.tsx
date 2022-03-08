import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import Color from '../../constants/Color';

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`
const CellContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`
const Cell = styled.div<{selected: boolean}>`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    height: 72px;
    width: 72px;
    border: ${props => props.selected ? '2px solid '+Color.line.primary : '1px solid '+Color.line.soft};
    background-color: ${props => props.selected ? Color.background.primaryLow : 'white'};
`
const TextView = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 4px;
`

const CellSelector = (props: Props) =>{

    const [ selectedOptions, setSelectedOptions ] = useState(props.selectedOptions ? props.selectedOptions : []);

    useEffect(() =>{
        setSelectedOptions(props.selectedOptions ? props.selectedOptions : []);
    },[props.selectedOptions]);

    const onClick = (item: OptionProps) =>{
        if(props.selection === 'multiple'){
            const result = selectedOptions.findIndex(e => e.id === item.id);
            const tempArray = [...selectedOptions];
            if(result === -1){
                //add object
                tempArray.push(item);
            }
            else{
                //delete object
                tempArray.splice(result, 1);
            }
            setSelectedOptions(tempArray);
            props.onClick && props.onClick(item);
            props.onChange && props.onChange(tempArray);
        }
        else{
            setSelectedOptions([item]);
            props.onClick && props.onClick(item);
            props.onChange && props.onChange([item]);
        }
    }

    return(
        <Container
            style={props.style}
        >
            {props.options.map((item, index) =>{
                const isSelected = selectedOptions ? selectedOptions.some((e: OptionProps) => item.id === e.id) : false;
                return(
                    <CellContainer>
                        <Cell
                            key={'cell'+index}
                            selected={isSelected}
                            onClick={() => onClick(item)}
                            style={props.cellStyle}
                        >
                            {item.icon &&
                                <item.icon
                                    height={24}
                                    width={24}
                                    color={Color.text.full}
                                />
                            }
                        </Cell>
                        <TextView>
                            <Text
                                type='p'
                                style={{textAlign: 'center'}}
                            >
                                {item.title}
                            </Text>
                            {item.subtitle &&
                                <Text
                                    type='p'
                                    style={{fontSize: 14, marginTop: 2, textAlign: 'center'}}
                                >
                                    {item.subtitle}
                                </Text>
                            }
                        </TextView>
                    </CellContainer>
                )}
            )}
        </Container>
    )
}
export default CellSelector;
export interface Props{
    style?: any,
    cellStyle?: any,
    options: Array<OptionProps>,
    selectedOptions: Array<OptionProps>,
    selection?: 'single' | 'multiple',
    onChange?: (array: Array<OptionProps>) => void,
    onClick?: (item: OptionProps) => void
}
export interface OptionProps {
    id: string,
    title: string,
    subtitle?: string,
    icon?: any
}