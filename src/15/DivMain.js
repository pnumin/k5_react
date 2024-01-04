import { useRecoilValue } from "recoil";
import { divn, divn2 } from "./DivAtoms" ;

import Div1 from "./Div1";

export default function DivMain() {
  const n = useRecoilValue(divn);
  const n2 = useRecoilValue(divn2);
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-300">
      <div className="w-5/6 h-5/6 rounded-xl bg-green-900 p-10 flex flex-col justify-center items-center">
        <div className="text-xl text-white">Recoil DivMain n={n}, n2={n2}</div>
        <Div1 />
      </div>      
    </div>
  )
}

