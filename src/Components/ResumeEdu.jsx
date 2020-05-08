import React from 'react';
import style from './ResumeEdu.module.css';

export default ({education}) => {
  return(
    <div className={style.root}>
      <h3>Education</h3>
      <div className={style.title}>{education.title}</div>
      <div className={style.location}>{education.location}</div>
    </div>
  )
}