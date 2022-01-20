/// <reference types="react" />
declare const CheckboxList: (props: Props) => JSX.Element;
export default CheckboxList;
export interface Props {
    options: Array<{
        id: string;
        label: string;
        sublabel?: string;
        defaultSelection?: boolean;
    }>;
    selection: 'single' | 'multiple';
    onChange?: Function;
}
