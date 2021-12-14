import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox';

describe("Checkbox", () => {
    it("render", () => {
        render(
            <Checkbox 
                label={'Checkbox label'}
            />
        )
        expect(screen.getByText("Checkbox label")).toBeInTheDocument()
    })
    it("enabled", () => {
        const { rerender } = render(
            <Checkbox 
                label={'Checkbox label'}
                disabled={false}
            />
        )
        expect(screen.getByTestId('checkbox')).toBeEnabled()
        const handleClick = jest.fn();
        rerender(
            <Checkbox 
                label={'Checkbox label'}
                disabled={false}
                onClick={handleClick}
            />
        )
        fireEvent.click(screen.getByTestId('checkbox'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    it("disabled", () => {
        const { rerender } = render(
            <Checkbox 
                label={'Checkbox label'}
                disabled={true}
            />
        )
        expect(screen.getByTestId('checkbox')).toBeDisabled()
        const handleClick = jest.fn();
        rerender(
            <Checkbox 
                label={'Checkbox label'}
                disabled={true}
                onClick={handleClick}
            />
        )
        fireEvent.click(screen.getByTestId('checkbox'))
        expect(handleClick).toHaveBeenCalledTimes(0)
    })
})