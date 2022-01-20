/// <reference types="react" />
declare const Filter: (props: Props) => JSX.Element;
export default Filter;
export interface Props {
    id: string;
    label: string;
    disabled?: boolean;
    design?: 'single' | 'multiple' | 'ratio';
    options: Array<{
        id: string;
        label: string;
        sublabel?: string;
        defaultSelection?: boolean;
    }>;
    onChange?: Function;
}
