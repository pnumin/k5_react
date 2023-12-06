export default function TailButton({caption, handleClick}) {
  return (
    <button className="inline-flex justify-center items-center 
                        px-5 py-2 rounded-md m-2
                        hover:bg-orange-200 hover:text-orange-700
                        bg-orange-700 text-white" 
            onClick={handleClick}
    >
      {caption}
    </button>
  )
}
