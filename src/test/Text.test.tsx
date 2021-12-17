import { render } from '@testing-library/react'
import { P } from '../components';


describe("P", () => {
    it("render", () => {
        render(
            <P>
                Testing
            </P>
        );
    })
});