import style from "./header.module.scss";
import logo from "../../img/logo.svg";
import img from '../../img/img.svg';
import img1 from '../../img/img1.svg';
import img3 from '../../img/img3.svg';
import icons from '../../icons/icons.svg'
import { Input } from "../pages/input/input";
import { Head } from "../pages/head/head";
import { Card } from "../pages/card/card";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.block}>
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="">
            <Input />
          </div>
          <div className={style.row}>
            <button className={style.btn}>Airbnb your home</button>
            <img src={img} alt="img" />
            <div className={style.desc}>
           <img src={img1} alt="img" />
           <img src={img3} alt="" />
            </div>
          </div>
        </div>

      </div>
        <hr className={style.hr}/>
        <div className={style.container}>
        <div className={style.row}>
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        <Head />
        </div>
        </div>
        <div className={style.box}>
          <Card />
        </div>
    </header>
  );
};

