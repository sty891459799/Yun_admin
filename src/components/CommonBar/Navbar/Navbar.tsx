import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import history from '../../../Router/history.js';
const { SubMenu } = Menu;
const { Sider } = Layout;
interface props { };
type states = {
	menuList: {}
}
const menuConfig = [
	{
		'title': "商家首页",
		'key': '/home',
		'to': '/'
	}, {
		'title': "订单管理",
		'key': '/order',
		'to': '/order',
		'children': [
			{
				'title': "待处理",
				'key': '/order/pending',
				'to': '/order',
			},
			{
				'title': "历史订单",
				'key': '/history',
				'to': '/orderHistory',
			}
		]
	}
];
class Navbar extends Component<props, states> {
	componentWillMount() {
		const menuList = this.renderMenu(menuConfig);
		this.setState({
			menuList
		})
	}
	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu key={item.key} title={item.title}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item key={item.key} title={item.title} onClick={() => { history.push(item.to) }}>
						{item.title}
					</Menu.Item>
				)
			}
		})
	}
	render() {
		return (
			<Sider width={200} className="site-layout-background">
				<Menu style={{ height: '100%', borderRight: 0 }}
					theme='dark'>
					{this.state.menuList}
				</Menu>
			</Sider>
		);
	}
}

export default Navbar;