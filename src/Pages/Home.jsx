import React from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className={style.root}>
      <Link className={style.btn} to="/my-resume">Resume</Link>
      <Link className={style.btn} to="/my-profile">Profile</Link>
    </div>
  )
}

export default Home;