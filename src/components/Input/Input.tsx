import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '../../constants/Color';
import { Calendar, Phone, User, Mail, X, MapPin } from 'react-feather'
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
    const [value, setValue] = useState("")
    const [ error, setError] = useState("")
    useEffect(()=>{
        if(props.value) setValue(props.value)
        if(props.error) setError(props.error)
    },[props.value, props.error])
    const onValuechange = (e:any) => {
        setValue(e.target.value)
    }
    const onDateChange = (e:any) =>{
        setValue(e.target.value);
        if(e.target.value.length === 2 || e.target.value.length === 5){
            setValue(e.target.value+'/');
        }
    }
    const onInputKeyPress = (e:any) =>{
        if(e.keyCode === 8){
            if(e.target.value[e.target.value.length -2]==="/")
                setValue(value.substring(0, value.length - 2));
            
        }
    }
    return(
       
        <>
        {
        //DATE
        props.type==="date" ?
         <><InputView {...props} data-testid="input">
         <IconStyle><Calendar stroke={Color.gray2}/></IconStyle>
         <InputStyled aria-label={props.label} {...props} placeholder="dd/mm/yyyy" onKeyDown={onInputKeyPress} maxLength={10}  onChange={onDateChange}  type="tel" style={{fontSize:16,"paddingLeft":"64px", border:props.error ? `1px solid #FF5A5A`:value?"1px solid #00BA88":""}} value={value}/>
         {value && <IconStyle onClick={()=>setValue("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
         {error && <ErrorDiv>{error}</ErrorDiv>}
          </InputView>
         </>
        :
        
        //PHONE
        props.type==="phone" ?
        <><InputView {...props} data-testid="input">
        <IconStyle><Phone stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} {...props} type="tel" onChange={onValuechange} style={{fontSize:16,"paddingLeft":"64px", border:props.error ? `1px solid #FF5A5A`:value?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>setValue("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        {error && <ErrorDiv>{error}</ErrorDiv>}
         </InputView>
        </>:
        
        //PHONE
        props.type==="email" ?
        <><InputView {...props} data-testid="input">
        <IconStyle><Mail stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} type="email" onChange={onValuechange} {...props}  style={{fontSize:16,"paddingLeft":"64px", border:props.error ? `1px solid #FF5A5A`:value?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>setValue("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        {error && <ErrorDiv>{error}</ErrorDiv>}
         </InputView>
        </>:
       
       //ADDRES
        props.type==="location" ?
        <><InputView {...props} data-testid="input">
        <IconStyle><MapPin stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} type="text" onChange={onValuechange} {...props}  style={{fontSize:16,"paddingLeft":"64px", border:props.error ? `1px solid #FF5A5A`:value?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>setValue("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        {error && <ErrorDiv>{error}</ErrorDiv>}
        </InputView></>
        :
         
         //TEXT
        <><InputView {...props} data-testid="input">
        <IconStyle><User stroke={Color.gray2}/></IconStyle>
        <InputStyled aria-label={props.label} onChange={onValuechange} {...props}  style={{fontSize:16,"paddingLeft":"64px", border:props.error ? `1px solid #FF5A5A`:value?"1px solid #00BA88":""}} value={value}/>
        {value && <IconStyle onClick={()=>setValue("")} style={{right:16, cursor:"pointer"}}><X data-testid="close" stroke={Color.gray2}/></IconStyle>}
        </InputView>
        {error && <ErrorDiv>{error}</ErrorDiv>}
        </>
        }
        </>
        
    )
}
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input">{
    placeholder?:string,
    value?:string,
    type?: 'text' | 'phone' | 'email' | 'date'| 'location',
    error?:string,
    label?:string
}