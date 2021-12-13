import { render } from '@testing-library/react'
import P from './P';

test('render P', () => {
    render(
        <P>
            Testing
        </P>
    );
});