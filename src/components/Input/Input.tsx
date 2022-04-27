import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';
import Country from '../../constants/Country';
import { Calendar, User, Mail, X, MapPin, Lock } from 'lucide-react'

import  Select  from '../Select/Select';
import Text from '../Text/Text';
import InputRange from './InputRange';

const Container = styled.div`
    margin-bottom: 22px;
`
const InputContainer = styled.div<{error: boolean, focus: boolean}>`
    display: flex;
    align-items: center;
    border-radius: 12px;
    padding: 0px;
    height: 56px;
    outline: none;
    border: ${props => props.error ? '1px solid '+Color.status.color.error : props.focus ? '2px solid'+Color.line.primarySoft : '1px solid'+Color.line.soft};
    padding: 0px 16px;
`
const InputStyled = styled.input<{error: boolean, hideCalendar?: boolean}>`
    font-family: 'Poppins';
    font-size: 15px;
    border: none;
    outline: none;
    padding: 0px;
    :focus{
        cursor: text;
    }
    ::placeholder{
        color: ${Color.text.high}
    }
    ::-webkit-calendar-picker-indicator {
        display: ${props => props.hideCalendar && 'none'};
        -webkit-appearance: ${props => props.hideCalendar && 'none'};
    }
`
const IconStyle = styled.div`
    display:flex; 
    align-items:center; 
    height:24px;
    width:24px;
`;
const ErrorDiv = styled.div`
    margin: 0px 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    display: flex;
    color: ${Color.status.color.error};
`;
const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 8px;
`
const Input = (props: Props) =>{

    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
   
    const [ inputValue, setInputValue ] = useState<string | undefined>(undefined);
    const [ error, setError] = useState<string | undefined>("")
    const [ country , setCountry ] = useState<any>(Country[0]);
    const [ focus, setFocus ] = useState(false);

    useEffect(()=>{
        setError(props.error)
    },[props.error]);

    const onInputChange = (e: any) =>{
        setInputValue(e.target.value);
        props.onChange && props.onChange(e);
        if(props.type === 'phone'){
            const phone = country.title + e.target.value;
            props.onPhoneChange && props.onPhoneChange({
                country: country.title, 
                value: e.target.value,
                isValid: (phone.length > 8 && phone.length < 18) ? phoneUtil.isValidNumberForRegion(phoneUtil.parse(phone, country.region), country.region) : false
            });
        }
    }

    const onDeleteClick = (e: any) =>{
        setInputValue("");
        props.onChange && props.onChange(undefined);
        if(props.type === 'phone'){
            props.onPhoneChange && props.onPhoneChange({
                country: country.title, 
                value: undefined,
                isValid: false
            });
        }
    }

    const onCountryChange = (country:any) =>{
        setCountry(country);
        const phone = country.title + (inputValue ? inputValue : "");
        console.log(phone);
        props.onPhoneChange && props.onPhoneChange({
            country: country.title, 
            value: inputValue,
            isValid: (phone.length > 8 && phone.length < 18) ? phoneUtil.isValidNumberForRegion(phoneUtil.parse(phone, country.region), country.region) : false
        });
        props.onChange && props.onChange({target: {value: phone}});
    }

    const onInputFocus = (e: any) =>{
        setFocus(true);
        props.onFocus && props.onFocus(e);
    }

    const onInputBlur = (e: any) =>{
        setFocus(false);
        props.onBlur && props.onBlur(e);
    }

    return(props.type === 'range' ?
        <InputRange
            {...props}
        />
    :
        <Container
            style={props.containerStyle}
        >
            <InputContainer 
                error={error ? true : false}
                style={props.style}
                focus={focus}
            >
                {props.icon ? props.icon : props.type === 'email' ?
                    <Mail stroke={Color.text.full}/>
                : props.type === 'password' ?
                    <Lock stroke={Color.text.full}/>
                : props.type === 'location' ?
                    <MapPin stroke={Color.text.full}/>
                : props.type === 'date' ?
                    <Calendar stroke={Color.text.full}/>
                : props.type === 'phone' ?
                    <Select 
                        selectedItem={country} 
                        onChange={item => onCountryChange(item)} 
                        style={{ border:"none", padding:0}} id="country" 
                        options={Country}
                    />
                : null}
                <Column>
                    {inputValue &&
                        <Text type='p' style={{color: Color.text.high, fontSize: 12}}>
                            {props.placeholder}
                        </Text>
                    }
                    <InputStyled 
                        type={props.type === 'location' ? 'text' : props.type === 'phone' ? 'tel' : props.type}
                        {...props}
                        value={inputValue}
                        onChange={onInputChange}
                        maxLength={props.type === 'date' ? 10 : props.type === 'phone' ? 12 : undefined}
                        error={error ? true : false}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                    />
                </Column>
                {inputValue && 
                    <IconStyle onClick={onDeleteClick} style={{cursor:"pointer"}}>
                        <X data-testid="close" height={20} width={20} stroke={Color.text.high}/>
                    </IconStyle>
                }
            </InputContainer>
            {error && 
                <ErrorDiv>
                    <Text type='p' style={{color: Color.status.color.error, marginTop: 8, fontSize: 14}}>
                        {error}
                    </Text>
                </ErrorDiv>
            }
        </Container>
    )
}
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input">{
    containerStyle?: any,
    style?: any
    placeholder?:string,
    icon?: JSX.Element,
    type?: 'text' | 'phone' | 'email' | 'date'| 'location' | 'password' | 'range',
    error?: string|undefined,
    onChange?:(item:any)=>void
    onPhoneChange?:(item:any)=>void
    options?:Array<any>,
    hideCalendar?: boolean,
    min?: any,
    max?: any,
    lineColor?: string,
    thumbColor?: string
}