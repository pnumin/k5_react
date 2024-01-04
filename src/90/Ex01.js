import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";

export default function Ex01() {
  const arr = ['안녕하세요', '반갑습니다', '추워요'];
  const arrColor = ['blue', 'orange', 'green'] ;

  const [tagMsg, setTagMsg] = useState(arr[2]);
  const inRef = useRef() ;

  const tagArr = arr.map((item, idx) =>
    <MyButton key={`mb${idx}`} 
              caption={item} 
              bcolor={arrColor[idx]}
              handleOnClick={()=>handleClick(item)}/>
  );

  const handleClick = (msg) => {
    inRef.current.value === '' ? setTagMsg(msg)  
                               : setTagMsg(`${inRef.current.value}님 ${msg}`) 
  }

  useEffect(()=>{
    console.log("tagMag" , tagMsg) 
  }, [tagMsg]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="bg-slate-200 h-10 
                      flex justify-center items-center
                      text-2xl m-5 p-5">리액트</h1>
      <div className="flex justify-center items-center">
        <form className="flex justify-center items-center mx-5">
          <input type="text"
                ref={inRef}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                 placeholder="이름입력" />
        </form>
        {tagArr}
      </div>
      <div className="h-20 
                      flex justify-center items-center
                      text-2xl m-5 p-5">
        {tagMsg}
      </div>
    </div>
  )
}

