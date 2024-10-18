import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-200 px-4 py-2 text-sm placeholder:text-stone-400 transition-all duration-300
        sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 sm:w-64 "
      />
    </form>
  );
}
