import style from './Lotto.module.css' ;

export default function Lotto() {
  return (
    <main className={style.m}>
    <section className={style.sec}>
      <form className={style.fm}>
        <div className={style.fdiv}>
          <div className={style.div1} id='d1'>
          </div>
        </div> 
        <div className={style.fdiv}>
          <div className={style.div1} id='d2'>
            <button className={style.bt}>로또번호생성</button>
          </div>
        </div> 
      </form>
    </section>
    </main>
  )
}
