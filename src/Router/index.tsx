/*
 * @Author: Tian 
 * @Date: 2021-07-16 16:51:40 
 * @Last Modified by: Tian
 * @Last Modified time: 2021-07-17 18:33:30
 */

import Home from '../view/Home/Home';
import Login from '../view/Login/Login';
import ErrorPage from '../components/404';
import Order from '../view/order/orderPending/OrderPending';
import OrderHistory from '../view/order/OrderHistory/OrderHistory';
interface router {
	path: string;
	component: any;
	name: string;
	children?: Array<router>;
	auth?: Boolean
}
const routers: Array<router> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		auth: true
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
	},
	{
		path: '/orderHistory',
		name: 'OrderHistory',
		component: OrderHistory,
	},
	{
		path: '/404',
		name: 'Error',
		component: ErrorPage,
	}
]
export default routers;