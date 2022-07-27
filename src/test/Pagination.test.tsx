import { render, screen, fireEvent } from '@testing-library/react'
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
        let nextDiv = screen.getAllByTestId("right-arrow")
        fireEvent.click(nextDiv[0])
        expect(screen.getAllByText("2")[0]).toBeInTheDocument()
    })

    //unable prev 
    it("unable prev styles", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10}/>
        );
        let prevDiv = screen.getAllByTestId("left-arrow")
        expect(prevDiv[0]).toHaveStyle('background:white')
    })
    //unable next

    it("unable next styles", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10} start={2}/>
        );
        let nextDiv = screen.getAllByTestId("right-arrow")
        expect(nextDiv[0]).toHaveStyle('background:white')
    })
    //forcing a next click in max lenght
    xit("forcing a next click", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10} start={3}/>
        );
        let nextDiv = screen.getAllByTestId("right-arrow")
        fireEvent.click(nextDiv[0])
        expect(screen.getAllByText("3")[0]).toBeInTheDocument()
    })
    //forcing a prev click in max lenght
    xit("forcing a prev click", () => {
        render(
            <Pagination lenght={30} rowsPerPage={10}/>
        );
        let prevDiv = screen.getAllByTestId("left-arrow")
        fireEvent.click(prevDiv[0])
        expect(screen.getAllByText("0")[0]).toBeInTheDocument()
    })
});