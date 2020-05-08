import React from 'react';
import style from './ResumeHistory.module.css';
const Histroy = ({item}) => {
  return(
    <div className={style.item}>
      <div className={style.header}>
        <div className={style.title}>{item.title}</div>
        <div className={style.time}>{item.time}</div>
      </div>
      <h4 className={style.company}>{item.company}</h4>
      <ul>
        {
          item.duties.map((duty,index) => <li key={index}>{duty}</li>)
        }
      </ul>
    </div>
  )
}
export default ({history}) => {
  return(
    <div className={style.root}>
      <h3>Employment history</h3>
        {
          history.map((item,index) => <Histroy key={index} item={item} />)
        }
    </div>
  )
}