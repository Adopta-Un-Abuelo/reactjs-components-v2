import { render,screen } from '@testing-library/react'
import React from 'react';
import { Modal } from '../components';
import { mount } from 'enzyme'

describe("Modal", () => {
    it("render", () => {
        render(
            <Modal/>
        );

        expect(screen.getByTestId("modal")).toBeInTheDocument();
    })

    it("Title is rendered", () => {
        render(
            <Modal title={"Title"}/>
        );
    
        expect(screen.getByText("Title")).toBeInTheDocument();
    })

    it("Subtitle is rendered", () => {
        render(
            <Modal subtitle={"Subtitle"}/>
        );
    
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    })

    it("Cancel bottom is rendered", () => {
        render(
            <Modal/>
        );
    
        expect(screen.getByText("Cancelar")).toBeInTheDocument();
    })

    it("Guardar bottom is rendered", () => {
        render(
            <Modal/>
        );
    
        expect(screen.getByText("Guardar")).toBeInTheDocument();
    })
    it("Childs componetns is rendered", () => {
        render(
            <Modal>
                <div>Primer child</div>
                <div>Segundo child</div>
            </Modal>
        );
    
        expect(screen.getByText("Primer child")).toBeInTheDocument();
        expect(screen.getByText("Segundo child")).toBeInTheDocument();
    })

    /* it("Click cancel button", () => {
        render(
            <Modal>
            </Modal>
        );
        let button = screen.getByRole("button", {name:"Cancelar"})
        expect(screen.getByRole("button", {name:"Cancelar"})).toBeInTheDocument();
       
    }) */
});