import style from './Lotto.module.css' ; 
import { useState , useEffect } from 'react';

export default function Lotto() {
  // let tags = "Lotto번호 생성기"
  const [tags, setTags] = useState() ;

  const handleClick = (n) => {
    // tags = Math.floor(Math.random()*45) + 1 ;
    setTags(Math.floor(Math.random()*45) + 1)
  }

  useEffect(() => {
    setTags("Lotto번호 생성기") ;
  }, []) ;

  useEffect(()=>{
    console.log(tags)
  }, [tags]) ;

  return (
      <div>
       <div >
          <p className={style.divp}>{tags}</p>
       </div>
       <div>
          <button onClick={handleClick}>Lotto번호생성</button> 
       </div>
       
    </div>
  )
}
