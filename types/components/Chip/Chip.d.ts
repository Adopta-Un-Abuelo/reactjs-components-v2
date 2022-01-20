import { ComponentPropsWithoutRef } from 'react';
declare const Chip: (props: Props) => JSX.Element;
export default Chip;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    text: string;
    type?: 'big' | 'small';
}
