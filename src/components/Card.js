const Card = ({ photo, setPhotoToDelete }) => {
  return (
    <div className="relative mb-12">
      <div
        className={`group absolute p-4 w-full h-full flex flex-col justify-between`}
      >
        <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-black transition-all duration-500 opacity-0 group-hover:opacity-40 "></div>
        <button
          onClick={() => setPhotoToDelete(photo)}
          className={`p-2 self-end rounded-xl border font-mon font-medium text-xs text-red-cEB5757 focus:outline-none z-40 transition-all opacity-0 group-hover:opacity-100`}
        >
          delete
        </button>
        <p
          className={`font-mon font-medium text-lg text-white z-40 transition-all duration-500 opacity-0 group-hover:opacity-100`}
        >
          {photo.label}
        </p>
      </div>
      <img src={photo.url} alt={photo.label} className={`rounded-xl`} />
    </div>
  )
}

export default Card
