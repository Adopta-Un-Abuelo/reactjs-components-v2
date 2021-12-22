import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../components';
import { Star } from 'react-feather';
import React from 'react';

describe("Button", () => {
    it("render", () => {
        render(
            <Button 
                label={'Button'}
            />
        )
        expect(screen.getByText("Button")).toBeInTheDocument()
    })
    it("enabled", () => {
        const { rerender } = render(
            <Button 
                label={'Button'}
                disabled={false}
            />
        )
        expect(screen.getByTestId('button')).toBeEnabled()
        const handleClick = jest.fn();
        rerender(
            <Button 
                label={'Button'}
                disabled={false}
                onClick={handleClick}
            />
        )
        fireEvent.click(screen.getByTestId('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    it("disabled", () => {
        const { rerender } = render(
            <Button 
                label={'Button'}
                disabled={true}
            />
        )
        expect(screen.getByTestId('button')).toBeDisabled()
        const handleClick = jest.fn();
        rerender(
            <Button 
                label={'Button'}
                disabled={true}
                onClick={handleClick}
            />
        )
        fireEvent.click(screen.getByTestId('button'))
        expect(handleClick).toHaveBeenCalledTimes(0)
    })
    it("icon", () => {
        render(
            <Button 
                label={'Button'}
                icon={<Star data-testid="icon"/>}
            />
        )
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
})