import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react';
import { Pagination } from '../components';


describe("Pagination", () => {
    it("render", () => {
        render(
            <Pagination lenght={30} rowsPerPage={3}/>
        );
        expect(screen.getByTestId("pagination")).toBeInTheDocument()
    })

    it("startPage", () => {
        render(
            <Pagination lenght={30} rowsPerPage={3} start={7}/>
        );
        expect(screen.getAllByText("7")[0]).toBeInTheDocument()
    })

    it("wrong startPage", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10} start={7}/>
        );
        expect(screen.queryAllByAltText("7")).toEqual([])
    })

    it("Prev click", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10} start={2}/>
        );
        let prevDiv = screen.getAllByTestId("left-arrow")
        fireEvent.click(prevDiv[0])
        expect(screen.getAllByText("1")[0]).toBeInTheDocument()
    })

    it("Next click", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10} start={1}/>
        );
        let prevDiv = screen.getAllByTestId("right-arrow")
        fireEvent.click(prevDiv[0])
        expect(screen.getAllByText("2")[0]).toBeInTheDocument()
    })

    //unable prev 

    //unable next

    //forcing a right click

    //forcing a left click
});