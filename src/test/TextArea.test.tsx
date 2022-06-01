import { TextArea } from '../components';
import { render, screen} from '@testing-library/react'

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


