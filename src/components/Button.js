const Button = ({ children, color, onClick }) => {
  const colors = { green: "bg-green-c3DB46D", red: "bg-red-cEB5757" }

  return (
    <button
      className={`p-4 rounded-xl font-not font-bold text-base transition-all transform hover:scale-110 focus:scale-90 focus:outline-none ${
        color
          ? `${colors[color]} text-white shadow-xl`
          : "bg-transparent text-gray-cBDBDBD"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
