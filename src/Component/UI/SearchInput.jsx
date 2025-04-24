// SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/search.svg";
// update this import to your actual path

export default function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full relative">
      <div className="flex gap-[10px] justify-center items-center">
        <label htmlFor="search" className="absolute left-[20px] cursor-pointer">
          <img src={search} alt="search" />
        </label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          placeholder="search product..."
          className="w-full py-[0.5em] px-[3em] bg-white outline-none rounded-full border-2 border-[#EADDCB] shadow focus:border-[#CDE7F0] focus:ring-2"
        />
      </div>

      {showDropdown && query.trim() !== "" && (
        <div className="absolute z-30 bg-white border mt-2 rounded-xl w-full shadow-md max-h-[200px] overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: {
                      product: product,
                    },
                  })
                }
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {product.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results</div>
          )}
        </div>
      )}
    </div>
  );
}
