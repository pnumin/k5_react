import { Link, useNavigate } from "react-router-dom" ;
import TailButton from "../UI/TailButton" ;

export default function Rhome() {
  const navigate  = useNavigate() ;

  return (
    <div className="grow flex flex-col justify-center items-center">
      <div className="text-xl h-20">Home</div>
      <div className="flex">
        <div className="mx-10">Page1 이동1</div>
        <ul>
          <li><Link to='/page1/사과'>사과 🍎</Link></li>    
          <li><Link to='/page1/바나나'>바나나 🍌</Link></li>
          <li><Link to='/page1/당근'>당근 🥕</Link></li>      
        </ul>
      </div>
      <div className="flex">
        <div className="mx-10">Page1 이동2</div>
        <div>
          <TailButton caption={'사과'} bcolor={'sky'} handleClick={() => navigate('/page1/사과')} />
          <TailButton caption={'바나나'} bcolor={'sky'} handleClick={() => navigate('/page1/바나나')} />
          <TailButton caption={'당근'} bcolor={'sky'} handleClick={() => navigate('/page1/당근')} />
        </div>
      </div>
      <div className="flex">
        <div className="mx-10">Page2 이동</div>
        <div>
          <TailButton caption={'사과'} bcolor={'lime'} handleClick={() => navigate('/page2?item1=사과&item2=바나나')} />
          <TailButton caption={'바나나'} bcolor={'lime'} handleClick={() => navigate('/page2?item1=바나나')} />
          <TailButton caption={'당근'} bcolor={'lime'} handleClick={() => navigate('/page2?item1=당근')} />
        </div>
      </div>
    </div>
  )
}
