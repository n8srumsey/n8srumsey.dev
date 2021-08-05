import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import MainPage from './MainPage/MainPage';
import Blog from './Blog/Blog';
import BlogAdmin from './BlogAdmin/BlogAdmin';
import Projects from './Projects/Projects';
import ProjectsAdmin from './ProjectsAdmin/ProjectsAdmin';
import SiteNavbar from "./Navbar/SiteNavbar";

const App = () => {
  return (
    <Router>
      <SiteNavbar />
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Redirect from='/about' to='/' />
        <Route exact path='/blog' component = {Blog}/>
        <Route exact path='/projects' component = {Projects}/> 
        <Route exact path='/resume' component={MainPage}/>
        <Route exact path='/blog/admin' component = {BlogAdmin}/>
        <Route exact path='/projects/admin' component = {ProjectsAdmin}/>
        <Route path='/blog/:postId' component = {BlogAdmin}/>
        <Route path='/project/:projectId' component = {ProjectsAdmin}/> 
      </Switch>
    </Router>
  );
};

export default App;