/**
 * @作者: Seale
 * @时间: 2021/11/17
 * @版本: V1.0
 * @说明: 捐助服务
 * @网站: https://www.imsle.com
 */


import {Methods, request} from "@/utils/request";
import {ApiUrl} from "@/api/ApiUrl";
import {AxiosResponse} from "axios";

/**
 * 创建一个捐助订单
 * @param userName 捐助者
 * @param amount 捐助金额
 */
export async function createDonationOrder(userName: string, amount: string): Promise<AxiosResponse> {
    return request(ApiUrl.CREATE_DONATION_URL, Methods.POST, {
        userName,
        amount
    })
}

/**
 * 检查当前订单状态
 * @param dnId 订单id
 */
export async function checkDonationOrderStatus(dnId: string): Promise<AxiosResponse> {
    return request(`${ApiUrl.CHECK_DONATION_STATUS_URL}/${dnId}`, Methods.GET, null);
}
