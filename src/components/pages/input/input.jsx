import style from './input.module.scss'
import search from '../../../img/search.svg'
export const Input = () => {
  return <div>
    <div className={style.title}>
      <p className={style.text}>Anywhere</p>
      <span className={style.pic}></span>
      <p className={style.text}>Any week</p>
      <span className={style.pic}></span>
      <a className={style.link} href="#">Add guests</a>
      <img src={search} alt="" />
      </div>      
  </div>
}