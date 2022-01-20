import { ComponentPropsWithoutRef } from 'react';
declare const Pagination: (props: Props) => JSX.Element;
export default Pagination;
export interface Props extends ComponentPropsWithoutRef<"div"> {
    start?: number;
    lenght: number;
    rowsPerPage: number;
}
