/**
 * /*
 *
 * @format
 * @Author: Tian
 * @Date: 2021-04-21 13:56:37
 * @Last Modified by: Tian
 * @Last Modified time: 2021-07-15 22:35:51
 * aioxs进行二次封装
 */
import urlDisc from "./urlDisc";
import instance from "./interce";
type Method = "GET" | "POST" | "PUT" | "DELETE";
type ResponseType = "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
interface AxiosRequest {
    baseURL?: string;
    url: string;
    data?: any;
    params?: any;
    method?: Method;
    headers?: any;
    timeout?: number;
    responseType?: ResponseType;
}
class Abstract {
    private apiAxios({ baseURL, headers, method, url, data, params, responseType }: AxiosRequest) {
        // url解析
        url = urlDisc(url); // 查询字典中是否有
        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data,
                responseType,
            })
                .then((res) => {
                    // 200:服务端业务处理正常结束
                    if (res.status === 200) {
                        resolve({ status: true, message: "success", data: res.data, code: 200 });
                    } else {
                        resolve({ status: false, message: res.data?.errorMessage || url + "请求失败", data: null, code: 404 });
                    }
                })
                .catch((err) => {
                    const message = err?.data?.errorMessage || err?.message || url + "请求失败";
                    reject({ status: false, message, data: null });
                });
        });
    }
    /**
     * GET类型的网络请求
     */
    protected getReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: "GET", url, data, params, responseType });
    }
    /**
     * POST类型的网络请求
     */
    protected postReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: "POST", url, data, params, responseType });
    }
    /**
     * PUT类型的网络请求
     */
    protected putReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: "PUT", url, data, params, responseType });
    }
    /**
     * DELETE类型的网络请求
     */
    protected deleteReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: "DELETE", url, data, params, responseType });
    }
}
export default Abstract;
