// iconfont配置

const iconfontUrl = '//at.alicdn.com/t/font_2121686_0gxwo5ycvkoe.js';

export default function initIconFont(): void {
    const remoteScript = document.createElement('script');
    remoteScript.type = 'text/JavaScript';
    remoteScript.src = iconfontUrl;
    document.body.appendChild(remoteScript);
}
