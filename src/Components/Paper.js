import React from 'react';
import style from './Paper.module.css';

const Paper = ({showPaper,handleClick,children}) => {

  return(
    <div className={style.root} style={showPaper?{top:'10vh'}:{top:'110vh'}}>
      <div className={style.page} >
        <div className={style.sticker} onClick={() => handleClick(false)}>CLOSE</div>
        <div className={style.show}>
          {children}
        </div>
        </div>
    </div>
  )
}

export default Paper;