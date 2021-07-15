import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import Router from './Router/index';
// import 'lib-flexible';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RouterBefore from './utils/routerBefore';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <RouterBefore routerConfig={Router} /> {/* //高阶组件路由守卫，进行路由权限控制 */}
        {/* {  // 此方法是单独渲染路由的方法
          Router.map((router, index) => {
            return (
              <Route key={index} exact path={router.path} component={router.component}></Route>
            )
          })
        } */}
        <Redirect exact to="/404" />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function;
// to log results (for example: reportWebVitals(console.log));
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals;
// reportWebVitals();

