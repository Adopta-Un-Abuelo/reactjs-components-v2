import { TextArea } from '../components';
import { render, screen, fireEvent,waitFor, wait } from '@testing-library/react'
import { Input, SearchBar } from '../components';
import { Star } from 'react-feather';
import React, {useState} from 'react'
import userEvent from '@testing-library/user-event';

describe("TextArea", () => {
    it("render", () => {
        render(
            <TextArea>
                
            </TextArea>
        );
        expect(screen.getByTestId("text_area")).toBeInTheDocument()
    })
});
describe("TextArea_background", () => {
    it("render", () => {
        render(
            <TextArea>
                
            </TextArea>
        );
        expect(screen.getByTestId("text_area")).toHaveStyle('background: #F2F2F2;');
    })
});
describe("TextArea_placeholder", () => {
    it("render", () => {
        render(
            <TextArea placeholder="Escribe">
                
            </TextArea>
        );
        fireEvent.focus(screen.getByPlaceholderText('Escribe'))
        expect(screen.getByPlaceholderText('Escribe')).toHaveStyle('1px solid #5963F6;');;
    })
});

