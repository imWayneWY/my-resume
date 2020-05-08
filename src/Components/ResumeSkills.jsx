import React from 'react';
import style from './ResumeSkills.module.css';

export default ({skills}) => {
  return(
    <div className={style.root}>
      <h3>Highlights of Skills</h3>
      <ul className={style.list}>
        {
          skills.map((skill,index) => <li key={index}>{skill}</li>)
        }
      </ul>
    </div>
  )
}