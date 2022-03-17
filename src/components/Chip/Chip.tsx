import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import Color from '../../constants/Color';

const ChipsContainerSmall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
`
const ChipsContainerBig = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    height: 30px;
    left: 118px;
    top: 1082px;
    background: #EBECFF;
    border-radius: 555px;
`
const ChipSelector = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    height: 40px;
    opacity: 0.8;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 555px;
`;
const Chip = (props: Props) =>{
    return(<>
        { props.type ==="selector" && <ChipSelector data-testid="chip" {...props}>
            <Text type='p' weight={"semibold"} style={{fontSize:12,color:Color.gray1}}>{props.text}</Text> 
        </ChipSelector>
        }
        { props.type ==="small" && <ChipsContainerSmall data-testid="chip" style={{...props.style, background: !props.inactive ? "#EBECFF":"#F2F2F2"}}>
            <Text type='p' weight={"semibold"} style={{fontSize:12,color:!props.inactive ? Color.blue3 : Color.gray3}}>{props.text.slice(0,1).toLocaleUpperCase()+props.text.slice(1,2)}</Text> 
        </ChipsContainerSmall>
        }
         { props.type ==="big" && <ChipsContainerBig data-testid="chip" style={{...props.style, background: !props.inactive ? "#EBECFF":"#F2F2F2"}}>
           <Text type='p' weight={"semibold"} style={{fontSize:12,color:!props.inactive ? Color.blue3 : Color.gray3}}>{props.text.slice(0,1).toLocaleUpperCase()+props.text.slice(1,props.text.length).toLocaleLowerCase()}</Text> 
        </ChipsContainerBig>
        }
    </>)
       
    
}
export default Chip;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text: string,
    type: 'big' | 'small' | 'selector',
    inactive:boolean
}