import { render, screen } from '@testing-library/react'
import { Feedback } from '../components';


describe("Feedback", () => {
    it("Check render", () => {
        render(
            <Feedback isVisible={true} text={"Exito"} type={"success"}/>
        );
        expect(screen.getByTestId('feedback')).toBeInTheDocument()
    })
    it("Checking correct text", () => {
        render(
            <Feedback isVisible={true} text={"Exito"} type={"success"}/>
        );
        expect(screen.getByText("Exito")).toBeInTheDocument()
    })

    it("Checking success style", () => {
        render(
            <Feedback isVisible={true} text={"Exito"} type={"success"}/>
        );
        expect(screen.getByTestId('feedback')).toHaveStyle("background:#59C183")
    })

});