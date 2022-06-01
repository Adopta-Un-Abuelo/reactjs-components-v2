import { render, screen } from '@testing-library/react'
import { Filter } from '../components';

const options = [
    {
        id: 'option_1',
        label: 'Option 1'
    },
    {
        id: 'option_2',
        label: 'Option 2'
    },
    {
        id: 'option_3',
        label: 'Option 3'
    },
    {
        id: 'option_4',
        label: 'Option 4'
    },
    {
        id: 'option_5',
        label: 'Option 5'
    },
    {
        id: 'option_6',
        label: 'Option 6'
    },
    {
        id: 'option_7',
        label: 'Option 7'
    },
    {
        id: 'option_8',
        label: 'Option 8'
    }
];

describe("Filter", () => {
    it("render", () => {
        render(
            <Filter 
                id={'filter'}
                label={'filter'}
                options={options}
            />
        )
        expect(screen.getByTestId("filter")).toBeInTheDocument()
    })
})