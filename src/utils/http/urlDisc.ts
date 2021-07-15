/**
 * /*
 *
 * @format
 * @Author: Tian
 * @Date: 2021-04-21 13:18:18
 * @Last Modified by: Tian
 * @Last Modified time: 2021-07-15 22:24:18
 * url 字典 验证是否存在这个url
 */

interface UrlDict {
    [key: string]: {
        [key: string]: string;
    };
}
const aa: UrlDict = {
    baseic: {
        login: "/login",
        home: "/",
    },
};

const getUrl = (url: string): string => {
    const dict = Object.values(aa.baseic);
    let inquire = dict.find((item) => item === url); // 如果存在证明字典里面有url
    if (inquire) {
        return url;
    } else {
        throw new Error("url is not Dict");
    }
};

export default getUrl;
