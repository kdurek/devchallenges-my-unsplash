const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-not font-medium text-sm text-gray-c4F4F4F">
        {label}
      </label>
      <input
        className="p-4 border rounded-xl placeholder-gray-cBDBDBD focus:outline-none"
        {...props}
      />
    </div>
  )
}

export default Input
