import React, { Component } from 'react';
import './Header.less';
import {
	withRouter
} from "react-router-dom";
import { Layout } from 'antd';
const { Header } = Layout;
type NavigationBarProps = {
	title: string;
	history?: any;
}
class Headers extends Component<NavigationBarProps> {
	render() {
		return (
			<Header className="header">
				<div className="logo" />
				<div onClick={this.edit.bind(this)} className="edit">退出登录</div>
			</Header>
		);
	}
	edit() {  //退出登录
		sessionStorage.clear();
		this.props.history.replace('/')
	}
}

export default withRouter(Headers);