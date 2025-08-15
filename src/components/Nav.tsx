import type { Dispatch, SetStateAction } from "react";
import { SearchInput, Logo } from ".";

interface NavProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
export const Nav = ({ query, setQuery }: NavProps) => {
  return (
    <header className="sticky top-0 bg-primary">
      <nav className="py-3 px-10 border-b border-b-light-gray ">
        <ul className="flex justify-between items-center">
          <li>
            <a href="/" aria-label="Przejdź do strony głównej">
              <Logo />
            </a>
          </li>
          <li>
            <SearchInput value={query} onChange={setQuery} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
