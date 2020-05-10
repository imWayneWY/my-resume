import React from 'react';
import style from './Book.module.css';

const Book = ({handleClick, handleSetType}) => {
  const clickMenu = (type) => {
    handleSetType(type);
    handleClick(true);
  }
  return(
    <div className={style.book}>
      <div className={style.cover}>
      </div>
      <div className={style.content}>
        <h4>Front End / Full Stack Developer</h4>
        <div className={style.list}>
          <ul>
            <li onClick={() => clickMenu('about')}>About me ................................... &weierp;</li>
            <li onClick={() => clickMenu('skill')}>Highlights of Skills .............. &weierp;</li>
            <li onClick={() => clickMenu('demo')}>Demos .......................................... &weierp;</li>
            <li onClick={() => clickMenu('history')}>Employment history ......... &weierp;</li>
            <li onClick={() => clickMenu('education')}>Education ................................... &weierp;</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Book;