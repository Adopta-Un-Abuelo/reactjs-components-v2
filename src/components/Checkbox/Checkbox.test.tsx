import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox';
import CheckboxList from './CheckboxList';

describe("Checkbox", () => {
    it("render", () => {
        render(
            <Checkbox 
                label={'Checkbox label'}
                selected={false}
            />
        )
        expect(screen.getByText("Checkbox label")).toBeInTheDocument()
    })
    it("enabled", () => {
        const { rerender } = render(
            <Checkbox 
                label={'Checkbox label'}
                disabled={false}
                selected={false}
            />
        )
        expect(screen.getByTestId('checkbox')).toBeEnabled()
        const handleClick = jest.fn();
        rerender(
            <Checkbox 
                label={'Checkbox label'}
                disabled={false}
                onClick={handleClick}
                selected={false}
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
                selected={false}
            />
        )
        expect(screen.getByTestId('checkbox')).toBeDisabled()
        const handleClick = jest.fn();
        rerender(
            <Checkbox 
                label={'Checkbox label'}
                disabled={true}
                onClick={handleClick}
                selected={false}
            />
        )
        fireEvent.click(screen.getByTestId('checkbox'))
        expect(handleClick).toHaveBeenCalledTimes(0)
    })
    it("selected", () => {
        const { rerender } = render(
            <Checkbox 
                label={'Checkbox label'}
                selected={true}
            />
        )
        expect(screen.queryByTestId('check-icon')).toBeInTheDocument()
        rerender(
            <Checkbox 
                label={'Checkbox label'}
                selected={false}
            />
        )
        expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument()
    })
    it("onClick", () => {
        const handleClick = jest.fn();
        render(
            <Checkbox 
                label={'Checkbox label'}
                selected={false}
                onClick={handleClick}
            />
        )
        fireEvent.click(screen.getByTestId('checkbox'))
        expect(screen.getByTestId('check-icon')).toBeInTheDocument()
    })
})