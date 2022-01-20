import { ComponentPropsWithoutRef } from 'react';
declare const P: (props: Props) => JSX.Element;
export default P;
export interface Props extends ComponentPropsWithoutRef<"p"> {
    weight?: 'bold' | 'semibold';
}
