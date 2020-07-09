import React from 'react';
import style from './Home.module.css';
import Card from './../Components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className={style.root}>
      <div className={style.btnContainer}>
        <Link className={style.btn} to="/my-resume"><Card title="RESUME" desc="The official resume showing in business way" /></Link>
        <Link className={style.btn} to="/my-profile"><Card title="PORTFOLIO" desc="A personal web page with animations" /></Link>
      </div>
      <p className={style.desc}>The resume and portfolio have same content, just present in different ways</p>
    </div>
  )
}

export default Home;