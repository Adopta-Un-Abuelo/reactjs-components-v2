import { ComponentPropsWithoutRef } from 'react';
declare const FeedBack: (props: Props) => JSX.Element;
export default FeedBack;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    type: 'success' | 'error';
    text: string;
}
