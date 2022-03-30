import React, { useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';

import Color from '../../constants/Color';
import Text from '../Text/Text';
import CheckboxList from '../Checkbox/CheckboxList';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

const Container = styled.div`
    position: relative;
`
const ButtonFilter = styled.button<{selected: boolean}>`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 40px;
	padding: 0px 16px;
	border-radius: 20px;
	border: ${props => props.disabled ? '1px solid '+ Color.line.soft : (props.selected ? '2px solid '+Color.line.primary : '1px solid '+ Color.line.full)};
	background-color: ${props => props.disabled ? Color.status.neutral.hover : (props.selected ? Color.background.primaryLow : 'transparent')};
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	:hover{
		background-color: ${props => props.disabled ? Color.status.neutral.hover : Color.gray4+'30'};
	}
`
const FilterView = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 48px;
    padding: 8px 16px;
    border-radius: 4px;
    height: 278px;
    width: 320px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
const ContentView = styled.div`
    display: flex;
    flex: 1;
    overflow-y: auto;
`
const BottomBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid ${Color.line.soft};
`

const Filter = (props: Props) =>{

    const [ showView, setShowView ] = useState(false);
    const [ selectedOptions, setSelectedOptions ] = useState<any>([]);
    const [ options, setOptions ] = useState(props.options);
    const [ fuse, setFuse ] = useState<any>(undefined);

    useEffect(() =>{
        if(props.options){
            //Init fuse.js search
            setFuse(new Fuse(props.options, {
                keys: ['label', 'id']
            }))
            setOptions(props.options);
        }
    },[props.options]);

    useEffect(() =>{
        //On click outside the filter view
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
        //Search if, in current options, is this selection
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
        //Get the selected options
        const temp = props.options.filter(item => item.defaultSelection);
        setSelectedOptions(temp);
        setOptions(props.options);
        props.onChange && props.onChange(temp);
    }

    const onRemove = () =>{
        const temp = props.options;
        //Remove all selections
        props.options.map((item, index) =>{
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
            const temp = props.options;
            props.options.map((item, index) =>{
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

    const onSearchChage = (e: ChangeEvent<HTMLInputElement>) =>{
        const searchText = e.target.value;
        if(searchText){
            const result = fuse.search(searchText);
            const temp = result.map((obj: any) => obj.item);
            setOptions(temp);
        }
        else
            setOptions(props.options);
    }

    return(
        <Container
            id={props.id}
            data-testid="filter"
            style={props.style}
        >
            <ButtonFilter
                selected={(selectedOptions.length > 0) ? true : false}
                disabled={props.disabled}
                onClick={onFilterClick}
            >
                <Text type='p'>
                    {props.label}
                </Text>
            </ButtonFilter>
            {showView &&
                <FilterView>
                    <SearchBar
                        style={{marginBottom: 16}}
                        placeholder={'Buscar'}
                        onChange={onSearchChage}
                    />
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
                            style={{marginRight: 4, height: 42}}
                            onClick={onRemove}
                        />
                        <Button
                            design={'primary'}
                            label={'Aplicar'}
                            onClick={onSave}
                            style={{height: 42}}
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
    style?: any,
    onChange?: Function
}