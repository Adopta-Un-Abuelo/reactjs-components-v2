import { render } from '@testing-library/react'
import { Text } from '../components';
import { screen } from '@testing-library/react'


describe("P", () => {
    it("render", () => {
        render(
            <Text type='p'>
                Testing
            </Text>
        );
    })
});
describe("p_bold", () => {
    it("render", () => {
        render(
            <Text
                type='p'
                weight={'semibold'}
                data-testid="p_bold"
            >
                Bold
            </Text>
        );
        expect(screen.queryByTestId("p_bold")).toHaveStyle(`fontWeight:600`);
    })
});
describe("P_semibold", () => {
    it("render", () => {
        render(
            <Text
                type='p'
                weight={'semibold'}
                data-testid="p_semibold"
            >
                SemiBold
            </Text>
        );
        expect(screen.queryByTestId("p_semibold")).toHaveStyle(`fontWeight:600`);
    })
});
