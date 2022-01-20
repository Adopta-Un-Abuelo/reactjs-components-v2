import { render, screen, fireEvent,waitFor, wait } from '@testing-library/react'
import { Input, SearchBar } from '../components';
import { Star } from 'react-feather';
import React, {useState} from 'react'
import userEvent from '@testing-library/user-event';


describe("Input", () => {
    beforeEach(()=>{
        render(
            <Input label="name"/>
        )
    })
    it("render", () => {
       
        expect(screen.getByTestId("input")).toBeInTheDocument()
    })
   
    it("When type the icon delete appear", () => {
        fireEvent.change(screen.getByLabelText("name"), {target: {value: 'Good Day'}})
        expect(screen.getByTestId("close")).toBeInTheDocument()
    })
})

describe("Input text phone", () => {
    beforeEach(()=>{
        render(
            <Input type={"phone"} label="phone"/>
        )
    })
    it("render", () => {
        expect(screen.getByTestId("input")).toBeInTheDocument()
    })
   
    it("Changing phone", () => {
        const input:any = screen.getByLabelText("phone");
        fireEvent.change(input, {target: {value: '6666666'}})
        expect(input.value).toEqual("6666666")
    })
    it("when click in the close button the text will be deleted", () => {
        const input:any = screen.getByLabelText("phone");
        fireEvent.change(input, {target: {value: '6666666'}})
        fireEvent.click(screen.getByTestId("close"))
        expect(input.value).toEqual("")
    })
})

describe("Displayin error message", () => {
    beforeEach(()=>{
        render(
            <Input type={"phone"} label="phone" error={"Invalid phone"}/>
        )
    })
    it("render", () => {
        expect(screen.getByText("Invalid phone")).toBeInTheDocument()
    })
    
    
})



