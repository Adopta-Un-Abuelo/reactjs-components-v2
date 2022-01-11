import React from "react"
import { Input } from "../components"
import { fireEvent, render, screen } from '@testing-library/react'
describe("Input text type", () => {
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
        fireEvent.change(screen.getByLabelText("phone"), {target: {value: '6666666'}})
        expect(screen.getByLabelText("phone").value).toEqual("6666666")
    })
    it("when click in the close button the text will be deleted", () => {
        fireEvent.change(screen.getByLabelText("phone"), {target: {value: '6666666'}})
        fireEvent.click(screen.getByTestId("close"))
        expect(screen.getByLabelText("phone").value).toEqual("")
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