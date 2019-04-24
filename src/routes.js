import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home/home';
import Layout from './hoc/Layouts/layout';

class routes extends Component {
        
  render() {
    return (
        <Layout>
            <Switch>
              <Route path='/' exact component={Home}></Route>
            </Switch>  
        </Layout>      
    )
  }
}
export default routes ;