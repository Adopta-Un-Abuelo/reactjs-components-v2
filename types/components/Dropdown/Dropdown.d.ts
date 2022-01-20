import { ComponentPropsWithoutRef } from 'react';
declare const Dropdown: (props: Props) => JSX.Element;
export default Dropdown;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    data?: Array<any>;
    title: string;
    selected?: any;
}
