import { useState, useEffect, useRef } from "react" ;
import TailH1 from '../UI/TailH1'; 
import TailSelect from "../UI/TailSelect";
import TailCard from '../UI/TailCard';

export default function Festival() {
  //상태변수
  const [tdata, setTdata] = useState([]) ;
  const [gu, setGu] = useState([]) ; 
  const [seldata, setSelTdata] = useState([]) ;
  const [tag, setTag] = useState([]) ;

  // select 박스 값
  // const selRef = useRef() ;

  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;

  //fetch 데이터 가져오기 tdata저장 사용자 정의 함수
  const getData = async () => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;
    
    const resp = await fetch(url) ;
    const data = await resp.json() ;

    setTdata(data.getFestivalKr.item) ;
    setSelTdata(data.getFestivalKr.item) ;
  }

  // select박스가 선택이 되면 
  const handleChange = (e) => {
    console.log(e.target.value) ;
    let tm = tdata.filter( item => item.GUGUN_NM === e.target.value) ;
    setSelTdata(tm) ;
  }

  //컴포넌트 업데이트
  useEffect(()=>{
    //1. fetch 데이터 가져오기 tdata저장
    getData() ;
  }, []);


  useEffect(()=>{
    //2. 구를 추출해서 gu 저장
    let tm = tdata.map((item) => item.GUGUN_NM)
    tm = [... new Set(tm)].sort() ;
    setGu(tm);

  }, [tdata]);


  useEffect(()=>{
    let tm = seldata.map((item, idx) => 
          <TailCard key={`tc${idx}`}
                    imgSrc = {item.MAIN_IMG_THUMB}
                    title  = {item.TITLE}
                    subtitle  = {item.TRFC_INFO}
                    tags  = {item.USAGE_DAY_WEEK_AND_TIME}
                    />
    );
    setTag(tm) ;
  }, [seldata]);

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'부산지역 축제'} />  
        </div>
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            <TailSelect opItem ={gu} handleChange={handleChange} />
          </div>
         
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {tag}
        </div>
      </div>

    </div>
  )
}
