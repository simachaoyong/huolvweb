import React, { Component } from 'react';
// 引入组件
import Home from './components/Home.js';

// 引入路由
import { withRouter,Route,Switch,Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          {/* 这里设置第一次重定向 */}
          <Redirect from='/' to="/home"/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
