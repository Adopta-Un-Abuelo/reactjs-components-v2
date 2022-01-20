import { ComponentPropsWithoutRef } from 'react';
declare const Label: (props: Props) => JSX.Element;
export default Label;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    text?: string;
    backgroundColor?: string;
    color?: string;
}
