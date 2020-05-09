import React, { useState } from 'react';
import style from './Profile.module.css';
import Book from '../Components/Book';
import Paper from '../Components/Paper';

const Profile = () => {
  const [showPaper, setShowPaper] = useState(false);
  const handleSetShowPaper = (paperState) => {
    setShowPaper(paperState);
  }
  return(
    <div className={style.root}>
      <Book handleClick={handleSetShowPaper} />
      <Paper showPaper={showPaper} handleClick={handleSetShowPaper}>Hello</Paper>
    </div>
  )
}

export default Profile;