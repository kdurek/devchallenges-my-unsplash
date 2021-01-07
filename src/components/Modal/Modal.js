const Modal = ({ open, children }) => {
  const hideShowClass = open ? "block" : "hidden"

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-25 z-50 ${hideShowClass}`}
    >
      <div className="p-8 w-2/5 rounded-xl bg-white">
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal
