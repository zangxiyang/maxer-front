/**
 * @作者: Seale
 * @时间: 2021/1/30
 * @版本: V1.0
 * @说明: ts 常用工具类
 * @网站: https://www.imsle.com
 */

export class Utils {
    public static isEmpty(obj: string | number): boolean{
        return typeof obj == "undefined" || obj == null || obj == "";
    }

}
