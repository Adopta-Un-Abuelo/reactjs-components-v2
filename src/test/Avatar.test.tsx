import { render, screen } from '@testing-library/react'
import React from 'react';
import { Avatar } from '../components';


describe("Avatar", () => {
    it("render", () => {
        render(
            <Avatar/>
        );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    })
});


describe("Avatar name", () => {
    beforeEach(()=>{
        render(
            <Avatar name={"Ronald de Jesús"}/>
        );
    })
    it("render", () => {
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    })
    it("Displaying first letter of name", () => {
        expect(screen.getByText('R')).toBeInTheDocument();
    })
});

describe("Avatar icon", () => {
    beforeEach(()=>{
        render(
            <Avatar icon={"https://socialenterprise.es/wp-content/uploads/2017/10/6743_Adopta-Un-Abuelo-Logo.ORG-vf.jpeg"}/>
        );
    })
    it("render", () => {
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    })
    it("Displaying image", () => {
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
});