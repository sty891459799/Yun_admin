/*
 * @Author: Tian 
 * @Date: 2021-07-16 16:51:40 
 * @Last Modified by:   Tian 
 * @Last Modified time: 2021-07-16 16:51:40 
 */

import Home from '../view/Home/Home';
import Login from '../view/Login/Login';
import ErrorPage from '../components/404';
interface router {
	path: string;
	component: any;
	name: string;
	children?: Array<any>;
	auth?: Boolean
}
const routers: Array<router> = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		auth: true
	},
	{
		path: '/404',
		name: 'Error',
		component: ErrorPage,
	}
]
export default routers;