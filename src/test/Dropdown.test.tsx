import { fireEvent, render, screen } from '@testing-library/react'
import { debug } from 'console';
import { Dropdown } from '../components';


describe("Dropdown", () => {
    beforeEach(()=>{
        render(
            <Dropdown/>
        );
    })
    it("render", () => {
        
        expect(screen.getByTestId('dropdown')).toBeInTheDocument()
    })
    it("Show menu", () => {
        fireEvent.click(screen.getByTestId('svgMenu'))
        expect(screen.getByTestId('menu')).toBeInTheDocument()
    })
});

describe("Dropdown options", () => {
    beforeEach(()=>{
        render(
            <Dropdown title={"name"} data={[{name:"Ronald"},{name:"Maria", image:"https://adoptaunabuelo.org/wp-content/uploads/2021/09/RTG00124.jpg"}]}/>
        );
        fireEvent.click(screen.getByTestId('svgMenu'))
    })
    it("Show menu", () => {
        expect(screen.getByTestId('menu')).toBeInTheDocument()
    })
    it("Options are displayed", () => {
        expect(screen.getByText('Ronald')).toBeInTheDocument()
        expect(screen.getByText('Maria')).toBeInTheDocument()
    })
    it("Initials is displayed", () => {
        expect(screen.getByText('R')).toBeInTheDocument()
    })
    it("Image is displayed", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
    })
});


describe("Selected", () => {
    beforeEach(()=>{
        render(
            <Dropdown selected={{name:"Ronald"}} title={"name"} data={[{name:"Ronald"},{name:"Maria", image:"https://adoptaunabuelo.org/wp-content/uploads/2021/09/RTG00124.jpg"}]}/>
        );
    })
    it("render", () => {
        expect(screen.getByTestId('dropdown')).toBeInTheDocument()
    })
    it("Show selected", () => {
        expect(screen.getByText('Ronald')).toBeInTheDocument()
    })
});