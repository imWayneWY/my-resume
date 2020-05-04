import React from 'react';
import style from './Book.module.css';

const Book = () => {
  return(
    <div className={style.book}>
      <div className={style.cover}>
      </div>
      <div className={style.content}>
        <h2>title</h2>
        <p>test</p>
      </div>
    </div>
  )
}

export default Book;