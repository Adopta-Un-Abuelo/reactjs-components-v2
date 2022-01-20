import { ComponentPropsWithoutRef } from 'react';
declare const Modal: (props: Props) => JSX.Element;
export default Modal;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    title?: string;
    subtitle?: string;
    disableButton?: boolean;
    onClose?: () => void;
    onSave?: () => void;
}
