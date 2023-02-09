import { SearchInputProps } from "../interfaces/input";

export const SearchInput = ({handleSearch}: SearchInputProps) => {
  return (
    <div className="search-wrap">
      <input
        className="search-input"
        type="text"
        placeholder="Search for an emoji"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};