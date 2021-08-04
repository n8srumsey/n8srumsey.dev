import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import MainPage from './MainPage/MainPage';
import Blog from './Blog/Blog';
import BlogAdmin from './BlogAdmin/BlogAdmin';
import Projects from './Projects/Projects';
import ProjectsAdmin from './ProjectsAdmin/ProjectsAdmin';
import RouterNavbar from './Navbar/RouterNavbar';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Redirect from='/about' to='/' />
        <Route exact path='/blog' component = {Blog}/>
        <Route exact path='/projects' component = {Projects}/> 
        <Route exact path='/resume' component={MainPage}/>
        <Route exact path='/blog/admin' component = {BlogAdmin}/>
        <Route exact path='/projects/admin' component = {ProjectsAdmin}/>
      </Switch>
    </Router>
  );
};

export default App;

/* 
 * 
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/blog' component = {RouterNavbar}/>
        <Route exact path='/blog/admin' component = {BlogAdmin}/>
        <Route path='/blog/:postId' component = {RouterNavbar}/>
        <Route path='/blog/admin/:postId' component = {RouterNavbar}/>
        <Route exact path='/projects' component = {RouterNavbar}/>
        <Route path='/project/:projectId' component = {ProjectsAdmin}/> 
        <Route exact path='/projects/admin' component = {RouterNavbar}/>
        <Route path='/projects/admin/:projectId' component = {RouterNavbar}/>
      </Switch>
    </Router>
 * 
 */