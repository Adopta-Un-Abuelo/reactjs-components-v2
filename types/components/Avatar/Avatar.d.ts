import { ComponentPropsWithoutRef } from 'react';
declare const Avatar: (props: Props) => JSX.Element;
export default Avatar;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    icon?: any;
    name?: string;
}
