import Div2 from "./Div2";
export default function Div1({n, setN}) {
  return (
    <div className="w-5/6 h-5/6 rounded-xl bg-green-700 p-10 flex flex-col justify-center items-center">
      <div className="text-xl text-white">Div1</div> 
      <Div2  n={n} setN={setN} />
    </div>
  )
}
