import { render, screen } from '@testing-library/react'
import { Chip } from '../components';


describe("Chip", () => {
    it("render", () => {
        render(
            <Chip type={"big"} text={"Hola"}/>
        );
    
        expect(screen.getByTestId('chip')).toBeInTheDocument();
    })
});

describe("Chip type", () => {
    it("render small type", () => {
        render(
            <Chip type={"small"} text={"Hola"}/>
        );
    
        expect(screen.getByText('Ho')).toBeInTheDocument();
    })
    it("render big type", () => {
        render(
            <Chip type={"big"} text={"Hola"}/>
        );
    
        expect(screen.getByText('Hola')).toBeInTheDocument();
    })
});