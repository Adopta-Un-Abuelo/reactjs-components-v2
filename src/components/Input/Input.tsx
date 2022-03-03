import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';
import Country from '../../constants/Country';
import { Calendar, Phone, User, Mail, X, MapPin } from 'react-feather'
import  Select  from '../Select/Select'
const InputView = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 64px;
    width: 100%;
    margin-bottom:22px;
`
const InputStyled = styled.input`
    background: ${Color.gray6};
    border-radius: 24px;
    font-family: 'Poppins';
    font-size: 14px;
    padding: 0px;
    height: 64px;
    width: 100%;
    outline: none;
    border: 0;
    font-size:16px;
    padding-left:64px;
    :focus{
        border: 1px solid ${Color.gray3};
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
    margin-top:-16px;
    font-family: Poppins;
    margin-left: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    width: 100%;
    display: flex;
    color: #FF5A5A;
`;
const Input = (props: Props) =>{
    const {onChange, value } = props
   
    const [ error, setError] = useState<string | undefined>("")
    const [ flag, setFlag ] = useState<any>(undefined)
    useEffect(()=>{
       setError(props.error)
       if(props.type==="phone"){
            const index = Country.findIndex((item)=>props.value && item.title.includes(props.value))
            if(index>=0) setFlag(Country[index])
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
    return(
       
        <>
        {
        //DATE
        props.type==="date" ?
         <><InputView data-testid="input">
         <IconStyle><Calendar stroke={Color.gray2}/></IconStyle>
         <InputStyled aria-label={props.label} placeholder="dd/mm/yyyy" onKeyDown={onInputKeyPress} maxLength={10}  name={props.name} onChange={onDateChange} type="tel" style={{border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
         {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
          </InputView>
         </>
        :
        
        //PHONE
        props.type==="phone" ?
        <><InputView data-testid="input">
        <IconStyle><Select onChange={props.onCountryChange} style={{ background:"#F2F2F2", border:"none", padding:0}} id="country" options={Country}/></IconStyle>
        <InputStyled aria-label={props.label} type="tel" {...props} style={{paddingLeft:117,border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
         </InputView>
        </>:
        
        //EMAIL
        props.type==="email" ?
        <><InputView data-testid="input">
        <IconStyle><Mail stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} type="email" {...props}  style={{border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}}/>
        {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
         </InputView>
        </>:
       
       //ADDRES
        props.type==="location" ?
        <><InputView data-testid="input">
        <IconStyle><MapPin stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} type="text" {...props}  style={{border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} />
        {value && <IconStyle onClick={()=>props.delete && props.delete()} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        </InputView>
        </>
        :
        //PASSWORD
        props.type==="password" ?
        <><InputView  data-testid="input">
        <IconStyle><User stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} {...props}  style={{border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>{props.delete && props.delete()}} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        </InputView>
        </>
        :
         //TEXT
        <><InputView  data-testid="input">
        <IconStyle><User stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} {...props}  style={{border:error ? `1px solid #FF5A5A`:value!==undefined && value!==null && value.length?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>{props.delete && props.delete()}} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        </InputView>
        </>
        }
        {error && <ErrorDiv>{error}</ErrorDiv>}
        </>
        
    )
}
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input">{
    placeholder?:string,
    value?:string,
    type?: 'text' | 'phone' | 'email' | 'date'| 'location' | 'password',
    error?:string|undefined,
    delete?:()=>void,
    onCountryChange?:(item:any)=>void
    label?:string
}