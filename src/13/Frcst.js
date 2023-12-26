import TailH1 from "../UI/TailH1" ;
import TailButton from "../UI/TailButton";
import TailSelect from "../UI/TailSelect" ;
import getxy from "./getxy.json" ;

export default function Frcst() {
  const sido = getxy.map( item => item["1단계"]) ;
  console.log(sido)

  const handleSelSido = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex my-10'>
          <TailH1 title={'단기예보선택'} /> 
        </div>
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <input type="date" />
          </div>
          <div>
            <TailSelect opItem={sido}  handleChange={handleSelSido} />
          </div>
          <div>
            <TailButton caption={"초단기예보"}  bcolor={"sky"}  handleClick={''} />
          </div>
          <div>
            <TailButton caption={"단기예보"}  bcolor={"sky"}  handleClick={''} />
          </div>
        </div>
      </div>
    </div>
  )
}
