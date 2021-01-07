import { useState } from "react"

const SearchInput = ({ setFilter }) => {
  const [onFocus, setOnFocus] = useState(false)

  return (
    <div
      className={`p-4 flex items-center gap-5 rounded-xl border ${
        onFocus ? "border-black" : "border-gray-cBDBDBD"
      }`}
    >
      <span
        className={`material-icons ${
          onFocus ? "text-black" : "text-gray-cBDBDBD"
        }`}
      >
        search
      </span>
      <input
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by name"
        className="placeholder-gray-cBDBDBD focus:outline-none"
      />
    </div>
  )
}

export default SearchInput
