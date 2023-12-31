import { useEffect, useState } from 'react';
import TailH1 from '../UI/TailH1' ;
import TailBlueButton from '../UI/TailBlueButton';
import data from './dataFrcst.json' ;

export default function Frcst() {
  const [dtTags, setDtTags] = useState() ;
  const [dtcnTags, setDtCnTags] = useState() ;

  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;
  
  let dtcn = {} 
  for(let i=0 ; i < dtKey.length ; i++) {
    dtcn[data[dtKey[i]]] = data[cnKey[i]] 
  }
  console.log(dtcn)

  const handleClick = (dt) => {
    console.log(dt, dtcn[dt])
    setDtCnTags(dtcn[dt]) ;
  }
  useEffect(() => {
    setDtTags(
      dtKey.map((k, idx)=>  
        <TailBlueButton key={`dt${idx}`} 
                        caption={data[k]} 
                        onClick={() => handleClick(data[k])} />
      )
    );
  }, []) ;
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <div className="flex justify-center items-center h-1/6 bg-slate-100">
        <TailH1 title={"초미세먼지 주간예보"} />
      </div>
      <div className='grow flex flex-col justify-top items-center'>
        <div className='flex justify-center items-center p-5'>
        {dtTags}
        </div>
        <div className='flex justify-center items-center p-5'>
        {dtcnTags}
        </div>
      </div>
    </div>
  )
}

