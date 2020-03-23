import React from 'react';
import './App.css';
import Nav from './Nav';
import Landing from './Landing';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import EmployerLogin from './EmployerLogin';
import SubmitProject from './SubmitProject';
import StudentLogin from './StudentLogin';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

const App = () => {
  
  // const APP_KEY = "8c3b0d8c7913b089bcb7c90514badd1a"; 
  // const REQ_URL = "http://data.orghunter.com/v1/charitysearch?user_key=8c3b0d8c7913b089bcb7c90514badd1a&state=CA"; 
  
  return (
    <Router>
      <div className = "App">
        <Nav /> 
        <Switch> 
          <Route path="/" exact component={Landing} />
          <Route path="/studentlogin" component={StudentLogin} />
          <Route path="/employerlogin" component={EmployerLogin} />
          <Route path="/submitproject" component={SubmitProject} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={ProjectDetail} /> 
        </Switch>
      </div>
    </Router>
  );  
}

export default App;
