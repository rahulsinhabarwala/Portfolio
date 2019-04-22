import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home/home';
import Layout from './hoc/Layouts/layout';
// import NewsArticle from './Components/Articles/News/Post/index';
// import VideoArticles from './Components/Articles/Videos/Video/index';
// import NewsMain from './Components/Articles/News/Main/index';
// import VideosMain from './Components/Articles/Videos/Main/index';
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