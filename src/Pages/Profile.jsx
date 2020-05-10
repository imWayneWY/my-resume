import React, { useState } from 'react';
import style from './Profile.module.css';
import Book from '../Components/Book';
import Paper from '../Components/Paper';
import * as data from './../data.json';

import ResumeSkills from '../Components/ResumeSkills';
import ResumeHistory from '../Components/ResumeHistory';
import ResumeDemos from '../Components/ResumeDemos';
import ResumeEdu from '../Components/ResumeEdu';

const ShowPaper = ({type}) => {
  if (type==='about') {
    return( 
      <div className={style.about}>
        <h4>{data.name}</h4>
        <p>{data.address}</p>
        <div>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2155" width="16" height="16"><path d="M813 206C657 16.6 367 16.6 211 206l-1 1.2c-116.9 142-118.6 346.2-4.3 490.5 66.3 83.6 145.5 162.7 237 237.4 40.3 33 98.8 33.2 139.2 0.2 94.3-76.9 176-160.8 244.9-251.6C934.4 542.1 926.2 343.5 813 206M512 586.1c-79 0-143-64-143-143s64-143 143-143 143 64 143 143-64 143-143 143" p-id="2156" fill="#708d00"></path></svg>
          <a href={`tel:${data.tel}`}>{data.tel}</a>
        </div>
        <div>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5378" width="16" height="16"><path d="M117.76 191.488c53.248 63.488 114.688 120.832 181.248 171.008 64.512 48.128 136.192 91.136 212.992 126.976 71.68-31.744 143.36-74.752 212.992-126.976 72.704-54.272 133.12-111.616 180.224-171.008 5.12-5.12-256-37.888-393.216-37.888s-398.336 31.744-394.24 37.888zM929.792 186.368c1.024 0 1.024 0 0 0 1.024 0 1.024 0 0 0zM935.936 190.464s0-1.024 0 0c0-1.024 0 0 0 0zM83.968 195.584c1.024-1.024 1.024-1.024 0 0 1.024-1.024 1.024-1.024 0 0zM940.032 194.56c-1.024 0-1.024 0 0 0-1.024 0-1.024 0 0 0z" p-id="5379" fill="#708d00"></path><path d="M937.984 218.112c-49.152 61.44-112.64 120.832-188.416 177.152-74.752 56.32-152.576 101.376-229.376 135.168-3.072 1.024-5.12 2.048-8.192 2.048s-6.144-1.024-8.192-2.048c-82.944-37.888-159.744-83.968-229.376-135.168C204.8 343.04 142.336 283.648 87.04 218.112 82.944 212.992 51.2 408.576 51.2 512s10.24 207.872 30.72 311.296c2.048 8.192 8.192 15.36 17.408 16.384 137.216 20.48 275.456 30.72 412.672 30.72s275.456-10.24 412.672-30.72c8.192-1.024 15.36-8.192 17.408-16.384 20.48-103.424 30.72-207.872 30.72-311.296s-30.72-299.008-34.816-293.888z" p-id="5380" fill="#708d00"></path></svg>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6481" width="16" height="16"><path d="M646.4 358.4a248.746667 248.746667 0 0 0-249.6 248.32v250.88a38.4 38.4 0 0 0 38.4 38.4h89.6a38.4 38.4 0 0 0 38.4-38.4v-250.88a82.773333 82.773333 0 0 1 91.733333-82.346667 85.333333 85.333333 0 0 1 74.666667 85.333334v247.893333a38.4 38.4 0 0 0 38.4 38.4h89.6a38.4 38.4 0 0 0 38.4-38.4v-250.88a248.746667 248.746667 0 0 0-249.6-248.32z" p-id="6482" fill="#708d00"></path><path d="M128 396.8m38.4 0l115.2 0q38.4 0 38.4 38.4l0 422.4q0 38.4-38.4 38.4l-115.2 0q-38.4 0-38.4-38.4l0-422.4q0-38.4 38.4-38.4Z" p-id="6483" fill="#708d00"></path><path d="M224 224m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" p-id="6484" fill="#708d00"></path></svg>
          <a href={data.linkedIn}>{data.linkedIn}</a>
        </div>
        <p>{data.desc}</p>
      </div>
    )
  } else if (type==='skill') {
    return(<ResumeSkills skills={data.skills} />)
  } else if (type==='demo') {
    return(<ResumeDemos demos={data.demos} />) 
  } else if (type==='history') {
    return(<ResumeHistory history={data.history} />)
  } else if (type==='education') {
    return(<ResumeEdu education={data.education} />)
  }
}

const Profile = () => {
  const [showPaper, setShowPaper] = useState(false);
  const [type, setType] = useState('about');
  const handleSetShowPaper = (paperState) => {
    setShowPaper(paperState);
  }
  const handleSetType = (type) => {
    setType(type);
  }
  return(
    <div className={style.root}>
      <Book handleClick={handleSetShowPaper} handleSetType={handleSetType} />
      <Paper showPaper={showPaper} handleClick={handleSetShowPaper} handleSetType={handleSetType}>
        {type? <ShowPaper type={type} /> : 'Welcome'}
      </Paper>
    </div>
  )
}

export default Profile;