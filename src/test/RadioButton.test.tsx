import { render,screen, fireEvent } from '@testing-library/react'
import React from 'react';
import { RadioButton } from '../components';


describe("Radio button", () => {
    it("render", () => {
        let data = undefined
        render(
            <RadioButton value={"option1"} text={"Opcioón 1"} onClick={()=>{data="option1"}}/>
        );
        expect(screen.getByTestId("radioButton")).toBeInTheDocument()
    })
});


describe("Radio button text Dispalyed", () => {
    it("render", () => {
        let data = undefined
        render(
            <RadioButton value={"option1"} text={"Opcioón 1"} onClick={()=>{data="option1"}}/>
        );
        expect(screen.getByText("Opcioón 1")).toBeInTheDocument()
    })
});

describe("Radio button onClick called", () => {
    it("render", () => {
        let data = undefined
        let fn = jest.fn()
        render(
            <RadioButton value={"option1"} text={"Opcioón 1"} onClick={fn}/>
        );
        let radioButton = screen.getByTestId("radioButton");
        fireEvent.click(radioButton)
        expect(fn).toBeCalledTimes(1)
    })
});

describe("Radio button disabled", () => {
    it("render", () => {
        let data = undefined
        let fn = jest.fn()
        render(
            <RadioButton disabled={true} value={"option1"} text={"Opcioón 1"} onClick={fn}/>
        );
        expect(screen.getByTestId("radioButton")).toHaveStyle("border: 2px solid #bdbdbd'")
    })
});