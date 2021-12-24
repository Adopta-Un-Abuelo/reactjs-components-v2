import { render, screen, fireEvent } from '@testing-library/react'
import { Input, SearchBar } from '../components';
import { Star } from 'react-feather';

describe("Input", () => {
    it("render", () => {
        render(
            <Input/>
        )
        expect(screen.getByTestId("input")).toBeInTheDocument()
    })
   
    it("icon", () => {
        render(
            <Input
                icon={<Star data-testid="icon"/>}
            />
        )
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
})

describe("SearchBar", () => {
    it("render", () => {
        render(
            <SearchBar/>
        )
        expect(screen.getByTestId("searchbar")).toBeInTheDocument()
    })
})

// checking hover

it("hover", () => {
    render(
        <Input/>
    )
    const input = document.getElementsByTagName("input")
    fireEvent.focus(input.item(0))
    expect(screen.getByTestId("input")).toBeInTheDocument()
})
// checking focus

//checking text border color change

// check seleccionar tipo big y small 