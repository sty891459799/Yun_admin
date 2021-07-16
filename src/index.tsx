import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import Router from './Router/index';
// import 'lib-flexible';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RouterBefore from './utils/routerBefore';
import NavBar from './components/CommonBar/Navbar';
import Headers from './components/CommonBar/Header/Header';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Headers title="dwsdwq1"></Headers>
      <Layout>
        <NavBar></NavBar>
        <HashRouter>
          <Layout style={{ padding: '0 10px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <RouterBefore routerConfig={Router} />
                <Redirect exact to="/404" />
              </Switch>
            </Content>
          </Layout>
        </HashRouter>
      </Layout>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

