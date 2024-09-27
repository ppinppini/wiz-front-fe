import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState<string>("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="flex gap-2 mb-4 mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 p-2 rounded"
        placeholder="검색어를 입력하세요"
      />
      <button
        onClick={handleSearch}
        className="bg-gray-700 text-white px-4 py-2 rounded"
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
