import Axios from './Axios';
import { AxiosInstance } from './type';
function createInstance(): AxiosInstance{ // 创建一个axios的实例 axios 其实一个函数
	let context = new Axios(); // this 指针1上下文
	let instance = Axios.prototype.request.bind(context);
	// 把Axios 的类的实例和类的原型上的方法都拷贝到instance 上.也就是requset 方法上
	instance = Object.assign(instance, Axios.prototype, context);
	return instance as AxiosInstance;
}
let axios = createInstance();
export default axios;
export * from './type'