/**
 * @作者: Seale
 * @时间: 2021/11/17
 * @版本: V1.0
 * @说明: API URL
 * @网站: https://www.imsle.com
 */
const BASE_URL = process.env.VUE_APP_API_URL;


export const ApiUrl = {
    CREATE_DONATION_URL: `${BASE_URL}/donate/create`,
    CHECK_DONATION_STATUS_URL: `${BASE_URL}/donate/check`
}
