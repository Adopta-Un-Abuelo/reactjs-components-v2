import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { Color } from '../../constants';
const InputView = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    height: auto;
`
const InputStyled = styled.input`
    height: 38px;
    border-radius: 40px;
    border: 1px solid ${Color.gray3};
    font-family: 'Poppins';
    font-size: 14px;
    padding: 0px;
    width: -webkit-fill-available;
    outline: none;
    :hover{
        background: #F2F2F2;
        cursor: pointer;
    }
    :focus{
        border: 1.5px solid #5963F6;
        background: white;
        cursor:text;
    }
    :placeholder-shown{
        border: 1px solid ${Color.gray5};
        :focus{
            border: 1.5px solid #5963F6;
            background: white;
            cursor:text;
        }
    }
`
const IconStyle = styled.div`
    position:absolute;
    display:flex; 
    align-items:center; 
    margin-left:16px;
`;

const SearchBar = (props: Props) =>{

    const { style, ...restProps } = props;

    return(
      <>{props.type === "big" ? 

      //BIG
      <InputView
            data-testid="searchBar"
            style={style}
        > 
            <IconStyle style={{height:24, width:24}}><Search stroke={Color.gray2}/></IconStyle>
            <InputStyled
                style={{height:"48px","paddingLeft" :"46px"}}
                {...restProps}
            />
         </InputView> :
    // SMALL
    <InputView
    data-testid="searchBar"
    style={style}
    > 
         <IconStyle style={{height:22, width:22}}><Search stroke={Color.gray2}/></IconStyle>
        <InputStyled
            style={{fontSize:16,"paddingLeft":"46px"}}
            {...restProps}
        />
        </InputView>
        }
         
        </>
    )
}
export default SearchBar;
export interface Props extends ComponentPropsWithoutRef<"input">{
    type?:"big"|"small"
}