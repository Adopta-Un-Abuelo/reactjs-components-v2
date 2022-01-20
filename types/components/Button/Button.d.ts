import React, { ComponentPropsWithoutRef } from 'react';
declare const Button: (props: Props) => JSX.Element;
export default Button;
export interface Props extends ComponentPropsWithoutRef<"button"> {
    label: string;
    design?: 'primary' | 'secondary' | 'text';
    icon?: React.ReactElement;
}
