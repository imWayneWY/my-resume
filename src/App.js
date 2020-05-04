import React from 'react';
import Book from './Components/Book';
import Resume from './Pages/Resume';
import Home from './Pages/Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="menu">
        <a className="item" href='/#/my-resume'>Resume</a>
        <a className="item" href='/#/my-profile'>Profile</a>
      </div>
      <Router className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/my-resume' component={Resume} />
          <Route exact path='/my-profile' component={Book} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
