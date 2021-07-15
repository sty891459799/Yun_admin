import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
interface user {
	path: string;
	component: any;
	name: string;
	auth?: Boolean;
}
type Props = {
	routerConfig: Array<user>;
	location?: any;
}

class routerBefore extends Component<Props> {
	render() {
		const { routerConfig, location } = this.props;
		let isLogin = sessionStorage.getItem('token');
		let pathName = location.pathname;
		// 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
		const targetRouterConfig: any = routerConfig.find(
			(item) => item.path === pathName
		);
		//如果没登录且页面为登录页的话渲染登录页
		if (pathName === '/login' && !isLogin) {
			return <Route path={pathName} component={targetRouterConfig.component} exact />
		}
		//如果已经登录渲染页面
		if (isLogin) {
			//如果登陆了跳转login页，则重定向
			if (pathName === '/login') {
				return <Redirect to="/" />
			}
			// 判定路由是否存在，如果存在正常渲染
			if (targetRouterConfig) {
				return <Route path={pathName} component={targetRouterConfig.component} exact />
			} else {
				//否则进入404页面
				return <Redirect to="/404" />;
			}
		} else {
			// 否则跳转到登录页
			return <Redirect to="/login" />
		}
	}
}

export default routerBefore;