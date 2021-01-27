/**
 * @作者: Seale
 * @时间: 2021/1/26
 * @版本: V1.0
 * @说明: 声明swiper
 * @网站: https://www.imsle.com
*/

declare module 'swiper/vue' {
    import _Vue from 'vue'
    export class Swiper extends _Vue{}
    export class SwiperSlide extends _Vue {}
}
