import React from 'react';
import style from './Card.module.css';

class Card extends React.Component{
  render(){
    return(
      <div className={style.colorCardBox}>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default Card;