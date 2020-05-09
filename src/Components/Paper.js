import React from 'react';
import style from './Paper.module.css';

const Paper = ({showPaper,handleClick,children}) => {

  return(
    <div className={style.root} style={showPaper?{top:'120px'}:{top:'120vh'}}>
      <div className={style.page} >
        <div className={style.sticker} onClick={() => handleClick(false)}>CLOSE</div>
        {children}
      </div>
    </div>
  )
}

export default Paper;