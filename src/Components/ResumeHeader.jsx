import React from 'react';
import style from './ResumeHeader.module.css';

export default ({name, address, tel, email, linkedIn}) => {
  return(
    <div className={style.header}>
      <h1>{name}</h1>
      <div>{address}</div>
      <div>
        <a href="tel: 5874398687">{tel}</a>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <a href={linkedIn}>{linkedIn}</a>
    </div>
  )
}