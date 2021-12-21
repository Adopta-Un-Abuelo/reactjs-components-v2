import { render, screen, fireEvent } from '@testing-library/react'
import Label from './Label';


describe("Label", () => {
    it("render", () => {
        render(
            <Label 
                text={'Render'}
            />
        )
        expect(screen.getByText("Render")).toBeInTheDocument()
    })
    it("Change color", () => {
         render(
            <Label 
                text={'Render'}
                color={"red"}
            />
        )
        expect(document.getElementById("Label")).toHaveStyle("color:red")
    })   
    it("Change background", () => {
        render(
           <Label 
               text={'Render'}
               backgroundColor={"red"}
           />
       )
       expect(document.getElementById("Label")).toHaveStyle("backgroundColor:red")
   }) 
   it("Change background and color", () => {
    render(
       <Label 
           text={'Render'}
           backgroundColor={"red"}
           color={"white"}
       />
   )
   expect(document.getElementById("Label")).toHaveStyle("backgroundColor:red")
   expect(document.getElementById("Label")).toHaveStyle("color:white")
}) 
})