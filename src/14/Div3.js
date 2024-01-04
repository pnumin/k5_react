import TailButton from "../UI/TailButton";
export default function Div3({n, setN}) {
  const handleUp = () => {
    setN(n+1) ;
  }
  return (
    <div className="w-5/6 h-5/6 rounded-xl bg-green-500 p-10 flex flex-col justify-center items-center">
      <div className="text-xl text-white">Div3</div>
      <div>
          <TailButton caption="증가" bcolor="lime" handleClick={handleUp} />
      </div>
    </div>
  )
}