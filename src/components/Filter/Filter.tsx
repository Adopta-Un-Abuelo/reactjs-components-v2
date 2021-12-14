import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';
import P from '../Text/P';
import CheckboxList from '../Checkbox/CheckboxList';
import Button from '../Button/Button';

const Container = styled.div`

`
const ButtonFilter = styled.button<{selected: boolean}>`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 40px;
	padding: 0px 16px;
	border-radius: 20px;
	border: ${props => props.disabled ? '1px solid '+ Color.gray3 : '1px solid '+ Color.gray4};
	color: ${props => props.disabled ? Color.gray3 : Color.gray1};
	background-color: ${props => props.selected ? Color.gray6 : 'transparent'};
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? 'transparent' : Color.gray4+'30'};
	}
`
const FilterView = styled.div`
    position: absolute;
    top: 64px;
    padding: 8px;
    border-radius: 4px;
    height: 278px;
    width: 320px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
const ContentView = styled.div`
    height: calc(100% - 48px);
    overflow-y: auto;
`
const BottomBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    margin-top: 8px;
`

const Filter = (props: Props) =>{

    const [ showView, setShowView ] = useState(false);
    const [ selectedOptions, setSelectedOptions ] = useState<any>([]);
    const [ options, setOptions ] = useState(props.options);

    useEffect(() =>{
        if(props.options) setOptions(props.options);
    },[props.options]);

    useEffect(() =>{
        document.addEventListener('mousedown', (e: any) => {
            const element = document.getElementById(props.id);
            if(element !== null){
                if(!element.contains(e.target))
                    if(showView) onFilterClick();
            }
        });
        return document.removeEventListener('mousedown', onFilterClick);
    });

    const onOptionChange = (selection: Array<any>) =>{
        const temp = options;
        options.map((item, index) =>{
            const some = selection.some(e => item.id === e.id);
            if(some)
                temp[index].defaultSelection = true;
            else
                temp[index].defaultSelection = false;
            return item;
        })
        setOptions(temp);
    }

    const onSave = () =>{
        setShowView(false);
        const temp = options.filter(item => item.defaultSelection);
        setSelectedOptions(temp);
        props.onChange && props.onChange(temp);
    }

    const onRemove = () =>{
        const temp = options;
        options.map((item, index) =>{
            temp[index].defaultSelection = false;
            return item;
        })
        setOptions(temp);
        setShowView(false);
        setSelectedOptions([]);
        props.onChange && props.onChange([]);
    }

    const onFilterClick = () =>{
        if(showView){
            const temp = options;
            options.map((item, index) =>{
                const some = selectedOptions.some((e: any) => item.id === e.id);
                if(some)
                    temp[index].defaultSelection = true;
                else
                    temp[index].defaultSelection = false;
                return item;
            })
            setOptions(temp);
            setShowView(false);
        }
        else
            setShowView(true);
    }

    return(
        <Container
            id={props.id}
        >
            <ButtonFilter
                selected={(selectedOptions.length > 0) ? true : false}
                disabled={props.disabled}
                onClick={onFilterClick}
            >
                <P>
                    {props.label}
                </P>
            </ButtonFilter>
            {showView &&
                <FilterView>
                    <ContentView>
                        <CheckboxList
                            options={options}
                            selection={props.design === 'multiple' ? 'multiple' : 'single'}
                            onChange={onOptionChange}
                        />
                    </ContentView>
                    <BottomBar>
                        <Button
                            design={'text'}
                            label={'Borrar'}
                            style={{marginRight: 4}}
                            onClick={onRemove}
                        />
                        <Button
                            design={'primary'}
                            label={'Aplicar'}
                            onClick={onSave}
                        />
                    </BottomBar>
                </FilterView>
            }
        </Container>
    )
}
export default Filter;
export interface Props{
    id: string,
    label: string,
    disabled?: boolean,
    design?: 'single' | 'multiple' | 'ratio'
    options: Array<{
        id: string,
        label: string,
        sublabel?: string,
        defaultSelection?: boolean
    }>
    onChange?: Function
}