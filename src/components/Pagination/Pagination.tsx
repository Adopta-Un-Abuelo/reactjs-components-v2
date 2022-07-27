import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants';
import Text from '../Text/Text'
import { ArrowLeft,ArrowRight } from 'lucide-react';

const Container = styled.div`
   display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 150px;
    height: 26px;
`
const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px;
    width: 26px;
    height: 26px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border-radius: 42px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
`;

const PaginationDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    width: 98px;
    height: 26px;
    left: 26px;
    top: 0px;
`;

const Pagination = (props: Props) =>{
    const [start, setStart] = useState(0)
    const [length , setLength] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(1)
    useEffect(()=>{
        if(props.lenght){ 
            setLength(props.lenght)
            setStart(0)
        }
        if(props.rowsPerPage) setRowsPerPage(props.rowsPerPage)
        if(props.start!==undefined && props.start!==null && props.start<=(Math.ceil(props.lenght/props.rowsPerPage)-1)) 
            setStart(props.start)
    },[props.start, props.lenght, props.rowsPerPage])

    const nextPage = () => {
        if(start<Math.ceil(props.lenght/props.rowsPerPage)-1){
            const page = start+1;
            setStart(page);
            props.onPageChange && props.onPageChange(page);
        }
    }
    
    const prevPage = () => {
        if(start>0){
            const page = start-1;
            setStart(page)
            props.onPageChange && props.onPageChange(page);
        }
    }

    return(
        <Container data-testid="pagination" style={props.style}>
           <Icon data-testid="left-arrow" onClick={prevPage} style ={{background:start===0 ? "white" : Color.gray6, cursor:start===0 ? "auto":"pointer"}}>
               <ArrowLeft style ={{stroke:start===0 ? Color.gray4 : Color.gray2}}/>
            </Icon>
           <PaginationDiv>
                <Text type='p' weight={"semibold"} style={{color:Color.gray3,paddingRight:8}}>{start}</Text>
                <Text type='p' weight={"semibold"} style={{color:Color.gray3,paddingRight:8}}>de</Text>
                <Text type='p' weight={"semibold"} style={{color:Color.gray3}}>{Math.ceil(length/rowsPerPage)-1}</Text>
           </PaginationDiv>
           <Icon data-testid="right-arrow" onClick={nextPage} style ={{background:start===Math.ceil(length/rowsPerPage)-1 ? "white" : Color.gray6, cursor:start===(Math.ceil(length/rowsPerPage)) ? "auto":"pointer"}}>
               <ArrowRight style ={{stroke:start===(Math.ceil(length/rowsPerPage)-1) ? Color.gray4 : Color.gray2}}/>
            </Icon>
        </Container>
    )
}
export default Pagination;
export interface Props extends ComponentPropsWithoutRef<"div">{
    start?: number,
    lenght: number,
    rowsPerPage: number,
    onPageChange?: (page: number) => void
}