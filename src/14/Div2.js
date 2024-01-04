import Div3 from "./Div3"
export default function Div2({n, setN}) {
   
  return (
    <div className="w-5/6 h-5/6 rounded-xl bg-green-500 p-10 flex flex-col justify-center items-center">
      <div className="text-xl text-white">Div2</div>
      <Div3  n={n} setN={setN} />
    </div>
  )
}
