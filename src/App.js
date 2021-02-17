import React from 'react';
import Resume from './Pages/Resume';
import Home from './Pages/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from './Pages/Profile';
import PdfResume from './Pages/PdfResume';

function App() {
  return (
    <div className='App'>
      <div className="menu">
        <a className="item" href='/#/'>Home</a>
        <a className="item" href='/#/my-profile'>Portfolio</a>
        <a className="item" href='/#/my-resume'>Resume</a>
      </div>
      <Router className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/my-resume' component={Resume} />
          <Route exact path='/my-profile' component={Profile} />
          <Route exact path='/my-pdf-resume' component={PdfResume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
