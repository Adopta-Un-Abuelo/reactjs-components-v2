import { render } from '@testing-library/react'
import { P } from '../components';
import { screen } from '@testing-library/react'


describe("P", () => {
    it("render", () => {
        render(
            <P>
                Testing
            </P>
        );
    })
});
describe("p_bold", () => {
    it("render", () => {
        render(
            <P
            weight={'bold'}
            data-testid="p_bold">
                Bold
            </P>
        );
        expect(screen.queryByTestId("p_bold")).toHaveStyle(`fontWeight:700`);
    })
});
describe("P_semibold", () => {
    it("render", () => {
        render(
            <P
            weight={'semibold'}
            data-testid="p_semibold">
                SemiBold
            </P>
        );
        expect(screen.queryByTestId("p_semibold")).toHaveStyle(`fontWeight:600`);
    })
});
