import { render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from '../components';
import { Star } from 'react-feather';
import React from 'react';
describe("SearchBar", () => {
    it("render", () => {
        render(
            <SearchBar/>
        )
        expect(screen.getByTestId("searchBar")).toBeInTheDocument()
    })
})

// checking hover

// checking focus

//checking text border color change

// check seleccionar tipo big y small 