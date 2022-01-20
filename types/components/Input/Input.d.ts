import { ComponentPropsWithoutRef } from 'react';
declare const Input: (props: Props) => JSX.Element;
export default Input;
export interface Props extends ComponentPropsWithoutRef<"input"> {
    placeholder?: string;
    value?: string;
    type?: 'text' | 'phone' | 'email' | 'date' | 'location';
    error?: string;
    label?: string;
}
