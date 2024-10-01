import style from "./card.module.scss";
import img4 from '../../../img/img4.svg';

export const Card = () =>{
  return(
<div className={style.container}>
   <div className={style.block}>
    <div className={style.desc}>
      <p className={style.text}>Display total price</p>
      <a className={style.link} href="#">Includes all fees, before taxes</a>
    </div>
    <div className={style.pic}>
          <img src={img4} alt="" />
    </div>
  </div>
</div>
  )
}

