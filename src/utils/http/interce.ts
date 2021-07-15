/**
 * /*
 *
 * @format
 * @Author: Tian
 * @Date: 2021-04-21 13:04:36
 * @Last Modified by: Tian
 * @Last Modified time: 2021-07-15 22:56:33
 * @请求拦截模块
 */

import { message } from "antd";
import axios from "axios";
const instance = axios.create({
    timeout: 10000,
    responseType: "json",
    baseURL: "http://127.0.0.1:7001/",
});

/**
 * http request 拦截器
 */

instance.interceptors.request.use(
    (config) => {
        let token = sessionStorage.getItem("token");
        if (token) {
            config.headers = {
                TianToken: token,
            };
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

/**
 * http response 拦截器
 */
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
        const response = error.response;
        // 根据返回的http状态码做不同的处理
        switch (response?.status) {
            case 401:
                message.error("token失效", response);
                // token失效
                break;
            case 403:
                message.error("没有权限", response);
                // 没有权限
                break;
            case 500:
                message.error("服务端错误", response);
                // 服务端错误
                break;
            case 503:
                message.error("服务端错误", response);
                // 服务端错误
                break;
            default:
                message.error("请求失败请稍后再试", response);
                break;
        }
    }
);

export default instance;
