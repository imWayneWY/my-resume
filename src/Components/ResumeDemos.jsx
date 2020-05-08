import React from 'react';
import style from './ResumeDemos.module.css';

const Demo = ({demo}) => {
  return(
    <div className={style.demo}>
      <h4>{demo.title}</h4>
      <p>{demo.desc}</p>
      <a href={demo.link}>{demo.link}</a>
    </div>
  )
}

export default ({ demos }) => {
  return(
    <div className={style.root}>
      <h3>Demos</h3>
      <p className={style.desc}>All demos have been deployed, please check the link below for more information</p>
      {
        demos.map((demo,index) => <Demo key={index} demo={demo} />)
      }
    </div>
  )
}