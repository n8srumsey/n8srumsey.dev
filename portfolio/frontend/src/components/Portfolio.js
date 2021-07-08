import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

import Blog from './Blog';
import BlogAdmin from './BlogAdmin';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'><p>This is the home page</p></Route>
                    <Route path='/blog' component={Blog} />
                    <Route path='/blog-admin' component={BlogAdmin} /> // temp path
                </Switch>
            </Router>
        )
    }
}