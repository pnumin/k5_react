import { useSearchParams } from "react-router-dom" ;
import getxy from "./getxy.json" ;

export default function FrcstDetail() {
  const [sParms] = useSearchParams() ;
  const gubun = sParms.get('gubun') ;
  const dt = sParms.get('dt') ;
  const area = sParms.get('area') ;

  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;

  //nx, ny구하기 
  let tm = getxy.filter(item  => item['1단계'] === area) ;
  
  let x = tm[0]['격자 X'] ;
  let y = tm[0]['격자 Y'] ;

  console.log(x, y)

  /* 초단기 예보 주소
  http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20210628&base_time=0630&nx=55&ny=127

  */

  /*
  http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20210628&base_time=0500&nx=55&ny=127

  */

  return (
    <div className="flex flex-col justify-top items-center w-full my-8">
      FrcstDetail
      {gubun}
      {dt}
      {area}
    </div>
  )
}
