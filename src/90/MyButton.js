
export default function MyButton({caption, bcolor, handleOnClick}) {
  const bcolorlt = {
    'blue' :  'bg-blue-700 hover:bg-blue-800',
    'orange' : 'bg-orange-700 hover:bg-orange-800',
    'green' : 'bg-green-700 hover:bg-green-800'
  }
  return (
    <button onClick={handleOnClick}
      className={`text-white
            ${bcolorlt[bcolor]}
            focus:ring-4
            focus:ring-blue-300 
            font-medium rounded-lg text-sm 
            px-5 py-2.5 me-2 mb-2 
            `} >
      {caption}
    </button>
  )
}
