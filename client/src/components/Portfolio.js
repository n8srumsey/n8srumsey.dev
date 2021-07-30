import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import MainPage from './MainPage/MainPage';
import Blog from './Blog/Blog';
import BlogAdmin from './BlogAdmin/BlogAdmin';
// import ProjectAdmin
import Projects from './Projects/Projects';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/blog' component = {Blog}/>
        <Route exact path='/blog/admin' component = {BlogAdmin}/>
        <Route path='/blog/:postId' component = {Blog}/>
        <Route path='/blog/admin/:postId' component = {Blog}/>
        <Route exact path='/projects' component = {Projects}/>
        <Route path='/project/:projectId' component = {MainPage}/> 
        <Route exact path='/projects/admin' component = {MainPage}/>
        <Route path='/projects/admin/:projectId' component = {MainPage}/>
      </Switch>
    </Router>
  );
};

export default App;
