/**
 * @作者: Seale
 * @时间: 2021/11/17
 * @版本: V1.0
 * @说明:支付按钮传递参数
 * @网站: https://www.imsle.com
 */

export interface IDonationProps {
    orderId: string,
    user: string,
    amount: number | string
    msg?: string,
}
