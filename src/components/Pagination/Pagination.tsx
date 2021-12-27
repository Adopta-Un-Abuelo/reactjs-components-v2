import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../constants';
import P from '../Text/P'
import { ArrowLeft,ArrowRight } from 'react-feather';
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
    const [length , setLength] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(0)
    useEffect(()=>{
        if(props.start!==undefined && props.start!==null && props.start<=(Math.ceil(props.lenght/props.rowsPerPage))) 
            setStart(props.start)
        if(props.lenght) setLength(props.lenght)
        if(props.rowsPerPage) setRowsPerPage(Math.ceil(props.lenght/props.rowsPerPage))
    },[props.start, props.lenght, props.rowsPerPage])
    const nextPage = () => {
        if(start<Math.ceil(props.lenght/props.rowsPerPage))setStart(start+1)
    }
    const prevPage = () => {
        if(start>0)setStart(start-1)
    }
    return(
        <Container data-testid="pagination" style={props.style}>
           <Icon data-testid="left-arrow" onClick={prevPage} style ={{background:start===0 ? "white" : Color.gray6, cursor:start===0 ? "auto":"pointer"}}>
               <ArrowLeft style ={{stroke:start===0 ? Color.gray4 : Color.gray2}}/>
            </Icon>
           <PaginationDiv>
                <P weight={"semibold"} style={{color:Color.gray3,paddingRight:8}}>{start}</P>
                <P weight={"semibold"} style={{color:Color.gray3,paddingRight:8}}>de</P>
                <P weight={"semibold"} style={{color:Color.gray3}}>{rowsPerPage}</P>
           </PaginationDiv>
           <Icon data-testid="right-arrow" onClick={nextPage} style ={{background:start===(Math.ceil(length/rowsPerPage)) ? "white" : Color.gray6, cursor:start===(Math.ceil(length/rowsPerPage)) ? "auto":"pointer"}}>
               <ArrowRight style ={{stroke:start===(Math.ceil(length/rowsPerPage)) ? Color.gray4 : Color.gray2}}/>
            </Icon>
        </Container>
    )
}
export default Pagination;
export interface Props extends ComponentPropsWithoutRef<"div">{
    start?: number,
    lenght: number,
    rowsPerPage: number,
}