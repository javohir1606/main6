import style from './menu.module.scss'
import { Data } from '../data/data'
export const Menu = () => {
  return<>
  <div className={style.container}>
      {Data.map((item) => 
          <div className={style.pic}>
              <img src={item.img} alt="#"/>
              <div className={style.item}>
                  <h2>{item.title}</h2>
                  <strong>{item.pirce}</strong>

              </div>
                  <p className={style.text}>{item.description}</p>
                  <p className={style.text}>{item.date}</p>
                  <strong className={style.tx}>{item.pirac}</strong>
            </div>
      )}
      </div>
   
  </>
}