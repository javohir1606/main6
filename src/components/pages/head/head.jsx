import style from './head.module.scss';
import icons from '../../../icons/icons.svg'
export const Head = () => {
  return (
          <div className={style.container}>
          <ul className={style.items}>
            <li className={style.list}>
              <a href="#" className={style.links}>
                 <img className={style.img} src={icons} alt="" />
              </a>
              <a className={style.link} href="#">Amazing views</a>
            </li>
          </ul>
        </div>
  )
}

