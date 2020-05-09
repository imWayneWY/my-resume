import React from 'react';
import style from './Book.module.css';

const Book = ({handleClick}) => {
  return(
    <div className={style.book}>
      <div className={style.cover}>
      </div>
      <div className={style.content}>
        <h4>Front End / Full Stack Developer</h4>
        <div className={style.list}>
          <ul>
            <li onClick={() => handleClick(true)}>About me ................................... &weierp;</li>
            <li>Highlights of Skills .............. &weierp;</li>
            <li>Demos .......................................... &weierp;</li>
            <li>Employment history ......... &weierp;</li>
            <li>Education ................................... &weierp;</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Book;