import SearchIcon from "@/static/icons/Search.svg?react";
import {
  memo,
  type ChangeEvent,
  type Dispatch,
  type InputHTMLAttributes,
  type SetStateAction,
} from "react";

interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: Dispatch<SetStateAction<string>> | ((payload: string) => void | string);
}

// Opakowałem komponent w memo gdybyśmy chcieli np. przekazać zwykłą funkcję jako props
// ograniczy to nie potrzebny rerender komponentu.
// Sam Dispatch by tego nie wymagał
export const SearchInput = memo(({ onChange, ...rest }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="py-3 px-4">
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          {...rest}
          type="text"
          onChange={handleChange}
          placeholder="Search for products"
          className="w-full pl-12 pr-4 py-3 bg-secondary-light border-0 rounded-xl text-secondary placeholder:text-secondary placeholder:text-normal focus:outline-none focus:ring-2 focus:ring-secondary-light transition-all duration-200 focus:bg-primary"
        />
      </div>
    </div>
  );
});
