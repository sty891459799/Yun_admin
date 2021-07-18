import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import Router from './Router/index';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RouterBefore from './Router/routerBefore';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <RouterBefore routerConfig={Router} />
        <Redirect exact to="/404" />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

