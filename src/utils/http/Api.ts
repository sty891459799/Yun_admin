/**
 * /*
 *
 * @format
 * @Author: Tian
 * @Date: 2021-04-21 14:33:20
 * @Last Modified by: Tian
 * @Last Modified time: 2021-04-21 14:33:42 项目api接口
 */

import http from "./http";
class Api extends http {
    login(params) { // 登录接口
        return this.getReq({ url: "/login", params });
    }
    home(params) { // 首页接口
        return this.getReq({ url: "/", params });
    }
}
// 单列模式返回对象;
let intance;
export default (() => {
    if (intance) return intance;
    intance = new Api();
    return intance;
})();
