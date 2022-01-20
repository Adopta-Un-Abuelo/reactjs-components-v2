import { ComponentPropsWithoutRef } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.scss';
declare const TextArea: (props: Props) => JSX.Element;
export default TextArea;
export interface Props extends ComponentPropsWithoutRef<"textarea"> {
    value?: string;
    placeholder?: string;
    type?: "normal" | "edit";
}
