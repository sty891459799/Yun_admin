// export interface Palin { // 定义params的类型
// 	[name:string]:any;
// }
export type Methods = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT';
export interface AxiosRequestConfig {
	method: Methods;
	url: string;
	params: Record<string, any>
}
// Axios.prototype.request 这个方法;
export interface AxiosInstance {
	<T = any>(config: AxiosRequestConfig): Promise<T>
}
export interface AxiosResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	header?: Record<string, any>;
	config?: AxiosRequestConfig;
	request?: XMLHttpRequest;
}