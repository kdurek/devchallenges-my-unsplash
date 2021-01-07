const SearchInput = ({ setFilter }) => {
  return (
    <div className="p-4 flex items-center gap-5 rounded-xl border border-gray-cBDBDBD">
      <span className="text-gray-cBDBDBD material-icons">search</span>
      <input
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by name"
        className="placeholder-gray-cBDBDBD focus:outline-none"
      />
    </div>
  )
}

export default SearchInput
