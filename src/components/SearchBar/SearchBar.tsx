import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { Color } from '../../constants';

const InputView = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    height: auto;
`
const InputStyled = styled.input<{design?: 'primary' | 'secondary'}>`
    height: 38px;
    border-radius: 6px;
    border: ${props => props.design === 'secondary' ? 'none' : '1px solid '+Color.line.soft};
    font-family: 'Poppins';
    font-size: 14px;
    padding: 0px;
    width: -webkit-fill-available;
    outline: none;
    :hover{
        cursor: pointer;
    }
    :focus{
        border: ${props => props.design === 'secondary' ? 'none' : '2px solid '+Color.text.full};
        background: white;
        cursor:text;
    }
`
const IconStyle = styled.div<{design?: 'primary' | 'secondary'}>`
    position:absolute;
    display:flex; 
    align-items:center; 
    margin-left: ${props => props.design === 'secondary' ? '0px;' : '16px;'};
`;

const SearchBar = (props: Props) =>{

    const { style, ...restProps } = props;

    return(props.type === "big" ? 
        //BIG
        <InputView
            data-testid="searchBar"
            style={style}
        > 
            <IconStyle design={props.design} style={{height:24, width:24}}><Search stroke={Color.gray2}/></IconStyle>
            <InputStyled
                style={{height: "48px", paddingLeft: props.design === 'secondary' ? '36px' : "46px"}}
                {...restProps}
            />
        </InputView> 
        :
        // SMALL
        <InputView
            data-testid="searchBar"
            style={style}

        > 
            <IconStyle design={props.design} style={{height:22, width:22}}><Search stroke={Color.gray2}/></IconStyle>
            <InputStyled
                style={{fontSize:16, paddingLeft: props.design === 'secondary' ? '36px' : "46px"}}
                {...restProps}
            />
        </InputView>
    )
}
export default SearchBar;
export interface Props extends ComponentPropsWithoutRef<"input">{
    type?:"big"|"small"
    design?: 'primary' | 'secondary'
}