import { render, screen } from '@testing-library/react'
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