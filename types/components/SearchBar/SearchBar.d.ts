import { ComponentPropsWithoutRef } from 'react';
declare const SearchBar: (props: Props) => JSX.Element;
export default SearchBar;
export interface Props extends ComponentPropsWithoutRef<"input"> {
    type?: "big" | "small";
}
