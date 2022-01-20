import { ComponentPropsWithoutRef } from 'react';
declare const RadioButton: (props: Props) => JSX.Element;
export default RadioButton;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    text?: string;
    value?: string;
    selected?: string;
    disabled?: boolean;
    onClick?: any;
}
