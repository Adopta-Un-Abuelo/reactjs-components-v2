import { ComponentPropsWithoutRef } from 'react';
declare const Checkbox: (props: Props) => JSX.Element;
export default Checkbox;
export interface Props extends ComponentPropsWithoutRef<"button"> {
    selected: boolean;
    label: string;
    sublabel?: string;
}
