import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import P from '../Text/P';
import Color from '../../constants/Color';

const ChipsContainerSmall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EBECFF;
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
    width: 105px;
    height: 30px;
    left: 118px;
    top: 1082px;
    background: #EBECFF;
    border-radius: 555px;
`

const Chip = (props: Props) =>{
    return(<>
        { props.type ==="small" && <ChipsContainerSmall data-testid="chip">
            <P weight={"semibold"} style={{color:Color.blue3}}>{props.text.slice(0,1).toLocaleUpperCase()+props.text.slice(1,2)}</P> 
        </ChipsContainerSmall>
        }
         { props.type !=="small" && <ChipsContainerBig data-testid="chip">
           <P style={{color:Color.blue3}}>{props.text}</P> 
        </ChipsContainerBig>
        }
    </>)
       
    
}
export default Chip;
export interface Props extends ComponentPropsWithoutRef<"div">{
    text: string,
    type?: 'big' | 'small' 
}