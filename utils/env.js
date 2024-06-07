export const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    // 用 test 匹配浏览器信息
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
        return true
    }
    return false;
}
