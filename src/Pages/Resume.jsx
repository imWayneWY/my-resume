import React from 'react';
import * as data from './../data.json';
import ResumeHeader from './../Components/ResumeHeader';
import style from './Resume.module.css';
import ResumeSkills from '../Components/ResumeSkills';
import ResumeDemos from '../Components/ResumeDemos';
import ResumeHistory from '../Components/ResumeHistory';
import ResumeEdu from '../Components/ResumeEdu';

const Resume = () => {
  return(
    <div className={style.root}>
      <ResumeHeader name={data.name} address={data.address} tel={data.tel} email={data.email} linkedIn={data.linkedIn} />
      <h2 className={style.title}>Front end / Full stack developer</h2>
      <div className={style.desc}>{data.desc}</div>
      <ResumeSkills skills={data.skills} />
      <ResumeDemos demos={data.demos} />
      <ResumeHistory history={data.history} />
      <ResumeEdu education={data.education} />
    </div>
  )
}

export default Resume;