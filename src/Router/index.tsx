import Home from '../view/Home';
import Login from '../view/Login';
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