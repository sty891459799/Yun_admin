import axios, { AxiosResponse } from './axiosConfig/index';

interface User { // 定义接口
	name: string;
	password: string;
}

let user: User = {
	name: "Tian",
	password: "123456"
};

axios({
	method: 'get',
	url: 'http://localhost:8080',
	params: user
}).then((response: AxiosResponse) => {
	console.log(response);
	return response.data;
}).catch((error: any) => {
	return error;
})