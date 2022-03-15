import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';
import Country from '../../constants/Country';
import { Calendar, User, Mail, X, MapPin } from 'react-feather'

import  Select  from '../Select/Select';
import Text from '../Text/Text';

const Container = styled.div`
    margin-bottom: 22px;
`
const InputView = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
`
const InputStyled = styled.input`
    border-radius: 12px;
    font-family: 'Poppins';
    font-size: 14px;
    padding: 0px;
    height: 56px;
    width: 100%;
    outline: none;
    border: 1px solid ${Color.line.soft};
    font-size:16px;
    padding-left:64px;
    :focus{
        border: 2px solid ${Color.line.primarySoft};
        cursor:text;
    }
    /* :placeholder-shown{
        :focus{
            border: 1px solid ${Color.gray5};
            cursor:text;
        }
    } */
`
const IconStyle = styled.div`
    position:absolute;
    display:flex; 
    align-items:center; 
    height:24px;
    width:24px;
    margin-left:24px;
`;
const ErrorDiv = styled.div`
    margin-left: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    display: flex;
    color: ${Color.status.color.error};
`;
const Input = (props: Props) =>{
    const {onChange, value } = props
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
   
    const [ error, setError] = useState<string | undefined>("")
    const [ flag, setFlag ] = useState<any>(undefined)
    const [ phoneValue , setPhoneValue ] = useState<string>("")
    useEffect(()=>{
       setError(props.error)
       if(props.type==="phone"){

           initPhone(value? value :"") 
       }
    },[props.error, props.value])

    const onDateChange = (e:any) =>{
        if(e.target.value.length === 2 || e.target.value.length === 5){
            e.target.value = e.target.value+'/'
        }
        onChange && onChange(e);
    }

    const onInputKeyPress = (e:any) =>{
        if(e.keyCode === 8){
            if(e.target.value[e.target.value.length -2]==="/"){
                e.target.value = e.target.value ? e.target.value.substring(0, e.target.value.length - 2) : ""
                 onChange && onChange(e);
            }
            if(e.target.value[e.target.value.length -1]==="/"){
                e.target.value = e.target.value ? e.target.value.substring(0, e.target.value.length - 1) : ""
                 onChange && onChange(e);
            }
        }
    }

    const onPhoneChange = (valPhone?:any,flagVal?:any) =>{
        if(flagVal)setFlag(flagVal)
        if(valPhone!==null) setPhoneValue(valPhone)
        const result = {
            country: flagVal? flagVal: flag,
            phone: valPhone!==null? valPhone: phoneValue
        }
        props.onChange && props.onChange({
            name:props.name, 
            country: result.country.title, 
            value: result.phone,
            isValid: (result.phone > 8 && result.phone < 18) ? phoneUtil.isValidNumberForRegion(phoneUtil.parse(result.phone, result.country.region), result.country.region) : false
        });
        props.onPhoneChange && props.onPhoneChange({target: {name:props.name, value: result.country.title+result.phone}});
    } 

    const initPhone = (phone:string): void=> {
        let result = {
            country:"",
            phone:""
        }
        const search = phone ? Country.findIndex((it: any)=>phone.includes(it.title)) : 0
        if(search>=0) setFlag(Country[search])
        
        result.country= Country[search].title;
        result.phone = phone.replace(Country[search].title,"")
        
        setPhoneValue(result.phone)
        props.onChange && props.onChange({name:props.name, country: Country[search].title, value: result.phone, isValid: false})
        props.onPhoneChange && props.onPhoneChange({target: {name:props.name, value: Country[search].title+result.phone}})
    }
    return(
       
        <Container style={props.containerStyle}>
            {//DATE
            props.type==="date" ?
                <InputView data-testid="input" style={props.style}>
                    <IconStyle><Calendar stroke={Color.gray2}/></IconStyle>
                    <InputStyled aria-label={props.label} placeholder={"dd/mm/yyyy"} onKeyDown={onInputKeyPress} maxLength={10}  name={props.name} onChange={onDateChange} type="tel" style={{border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
                    {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            :
            
            //PHONE
            props.type==="phone" ?
                <InputView data-testid="input" style={props.style}>
                    <IconStyle><Select  selectedItem={flag} onChange={item => onPhoneChange(null, item)} style={{ border:"none", padding:0}} id="country" options={Country}/></IconStyle>
                    <InputStyled aria-label={props.label} type="tel" {...props} onChange={e=>onPhoneChange(e.target.value)} style={{paddingLeft:117,border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={phoneValue}/>
                    {value && <IconStyle onClick={()=>onPhoneChange("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            :
            //EMAIL
            props.type==="email" ?
                <InputView data-testid="input" style={props.style}>
                    <IconStyle><Mail stroke={Color.gray2}/></IconStyle>
                    <InputStyled aria-label={props.label} type="email" {...props}  style={{border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}}/>
                    {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            :
            //ADDRES
            props.type==="location" ?
                <InputView data-testid="input" style={props.style}>
                    <IconStyle><MapPin stroke={Color.gray2}/></IconStyle>
                    <InputStyled aria-label={props.label} type="text" {...props}  style={{border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} />
                    {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            :
            //PASSWORD
            props.type==="password" ?
                <InputView  data-testid="input" style={props.style}>
                    <IconStyle><User stroke={Color.gray2}/></IconStyle>
                    <InputStyled aria-label={props.label} {...props}  style={{border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
                    {value && <IconStyle onClick={()=>{props.delete && props.delete()}} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            :
                //TEXT
                <InputView  data-testid="input" style={props.style}>
                    <IconStyle><User stroke={Color.gray2}/></IconStyle>
                    <InputStyled aria-label={props.label} {...props}  style={{border:error ? `1px solid `+Color.status.color.error:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
                    {value && <IconStyle onClick={()=>{props.delete && props.delete()}} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
                </InputView>
            }
            {error && <ErrorDiv><Text type='p' style={{color: Color.status.color.error, marginTop: 8, fontSize: 14}}>{error}</Text></ErrorDiv>}
        </Container>
        
    )
}
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input">{
    containerStyle?: any,
    style?: any
    placeholder?:string,
    value?:string,
    type?: 'text' | 'phone' | 'email' | 'date'| 'location' | 'password',
    error?:string|undefined,
    delete?:()=>void,
    onChange?:(item:any)=>void
    onPhoneChange?:(item:any)=>void
    label?:string,
    options?:Array<any>
}