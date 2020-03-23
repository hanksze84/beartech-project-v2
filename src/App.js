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
