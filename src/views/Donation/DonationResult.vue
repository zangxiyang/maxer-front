<template>
  <maxer-header title="☕️ 捐助本站" static/>
  <div class="maxer-container flex f-jc-c mt-20 mb-20">
    <div class="donation-container">
      <template v-if="orderStatus === OrderConstant.DONATION_ORDER_STATUS_NO_PAID">
        <!-- 当前订单处于未支付状态 -->
        <div class="qr flex f-jc-c">
          <template v-if="qrLoading">
            <img src="@/assets/img/battery-ab.gif" alt="加载中" class="qr-loading">
          </template>
          <template v-else>
            <div class="qr-code" :class="{'time-out': qrIsTimeOut}">
              <div class="time-out-container flex al-c f-jc-c none-select" v-if="qrIsTimeOut">
                二维码已失效
              </div>
              <qrcode-vue
                  :value="qrUrl"
                  :size="230"
                  :margin="2"/>
            </div>
          </template>
        </div>
        <div class="qr-loading-info flex al-c f-jc-c mt-10" v-if="qrLoading">
          <span>{{ qrLoadingInfoText }}</span>
        </div>
        <div class="info flex f-jc-c mt-20">
          <template v-if="timeVal === 0">
            <el-alert title="注意啦"
                      style="width: 80%"
                      description='当前二维码已失效，请重新请求！'
                      :closable="false"
                      type="error" effect="dark" show-icon/>
          </template>
          <template v-else>
          <span v-show="!qrLoading">
            请在「<span style="color: #dc1616">{{ timeText }}</span>」时间内使用<span style="color: #1d7fe6">支付宝</span>进行支付
          </span>
          </template>
        </div>
      </template>
      <template v-else-if="orderStatus === OrderConstant.DONATION_ORDER_STATUS_FINISH">
        <!-- 当前订单完成支付 -->
        <el-result
            icon="success"
            title="捐助成功"
            sub-title="感谢您的捐助，每一笔捐助本站都会物尽其用！"
        >
          <template #extra>
            <el-button type="primary" size="small" @click="$router.push('/')">回到首页</el-button>
          </template>
        </el-result>
      </template>
      <template v-else-if="orderStatus === OrderConstant.DONATION_ORDER_STATUS_TIMEOUT">
        <!-- 当前订单支付超时 -->
        TODO 支付超时
      </template>
    </div>
  </div>
  <el-dialog
      v-model="dialogIsPaid"
      title="确认是否支付"
      width="30%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"

  >
    <span>如果陛下<span style="color: red">已经支付</span>了该订单请点击确认</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogIsPaidCancel">朕改主意了~取消订单</el-button>
        <el-button type="primary" @click="dialogIsPaidCheck">朕已经完成支付</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {IDonationProps} from "@/views/Donation/IDonationProps";
import MaxerHeader from "@/components/MaxerHeader.vue";
import {checkDonationOrderStatus, createDonationOrder} from "@/api/DonationService";
import QrcodeVue from "qrcode.vue";
import {onUnmounted, ref, watch} from "vue";
import {OrderConstant} from "@/utils/Constant";
import {ElMessageBox} from "element-plus";

const route = useRoute();
const router = useRouter();

const params = route.params as unknown as IDonationProps
console.log(params)

/**
 * 轮询订单
 */
const checkOrderInterval = ref();
const checkCount = ref(0);
const orderStatus = ref(OrderConstant.DONATION_ORDER_STATUS_NO_PAID);
const dialogIsPaid = ref(false); // 确认支付模态框
const dialogIsPaidCancel = ()=>{
  // 关闭窗口
  dialogIsPaid.value = false;
  // 回到首页
  router.push("/");
}
const dialogIsPaidCheck = () => {
  checkDonationOrderStatus(params.orderId).then(res => {
    // 支付成功则更新当前状态
    if (res.data.data.isPaid){
      // 关闭窗口
      dialogIsPaid.value = false;
      // 更改订单状态为完成
      orderStatus.value = OrderConstant.DONATION_ORDER_STATUS_FINISH
    } else{
     // 当前为未支付状态弹出提示
      ElMessageBox.alert('当前订单没有被支付，请稍后再次确认！', '你不会是想白嫖吧？', {
        confirmButtonText: '好的',
        type: 'error'
      })
    }
  })
}


// 二维码逻辑
const qrUrl = ref('');
const qrLoading = ref(true);  // 二维码加载状态
const qrIsTimeOut = ref(false)  // 二维码是否已失效
// 开始进行下单请求
createDonationOrder(params.user, params.amount).then(res => {
  qrUrl.value = res.data.data.qrPayUrl
  // 填充订单id
  params.orderId = res.data.data.id;
  // 关闭二维码加载动画
  qrLoading.value = false
  // 开始计算时间
  startCalcTime();
  // 开始进行轮询检测 默认进行120次检测（四分钟），之后跳出模态框让用户主动确认是否被支付
  startCheckOrder(120);

})
// 支付请求加载特效
const qrLoadingInfos = ['支付请求飞到外太空了.', '支付请求飞到外太空了..', '支付请求飞到外太空了...',
  '飞船正在带着结果回来.', '飞船正在带着结果回来..', '飞船正在带着结果回来...',
  '支付请求遇到外星人了.', '支付请求遇到外星人了..', '支付请求遇到外星人了...',
  '快看~~UFO.', '快看~~UFO..', '快看~~UFO...']
const qrLoadingInfoText = ref('支付请求飞到外太空了')
let textIndex = 0;
const qrLoadingInterval = setInterval(() => {
  if (textIndex === qrLoadingInfos.length - 1) textIndex = 0;
  qrLoadingInfoText.value = qrLoadingInfos[textIndex++];
}, 500)

watch(qrLoading, (val) => {
  console.log(`当前状态${val}`)
  if (!val) {
    clearInterval(qrLoadingInterval)
    return;
  }
})


// 十分钟倒计时
const timeVal = ref(600); // 600s
const timeText = ref('10:00');
const timeInterval = ref();
const startCalcTime = () => {
  timeInterval.value = setInterval(() => {
    if (timeVal.value === 0) {
      // 如果已经经过10分钟则清除定时器
      clearInterval(timeInterval.value);
      return;
    }
    timeVal.value--;

  }, 1000);
}
// 进行监听timeVal的变化
watch(timeVal,
    (count) => {
      // 如果当前二维码已失效
      if (count === 0) {
        qrIsTimeOut.value = true;
      }
      let minutes: number | string = Math.floor(count / 60);
      let seconds: number | string = count - (minutes) * 60;
      if (seconds < 10) seconds = `0${seconds}`
      if (minutes < 10) minutes = `0${minutes}`
      timeText.value = `${minutes}:${seconds}`
    })


/**
 * 检查订单状态
 * @param max 轮询最大值
 */
const startCheckOrder = (max: number) => {
  const checkOrder = (): void => {
    // 轮询超过上限则关闭定时器，并弹出模态框让用户手动选择支付结果
    if (checkCount.value === max) {
      // 关闭定时器
      clearInterval(checkOrderInterval.value)
      // 弹出模态框让用户进行确认是否订单是否已经被支付
      dialogIsPaid.value = true;
      return;
    }
    if (orderStatus.value === OrderConstant.DONATION_ORDER_STATUS_FINISH as number) {
      // 当前订单已被支付
      // 关闭定时器
      clearInterval(checkOrderInterval.value)
      return;
    }
    // 轮询订单
    checkDonationOrderStatus(params.orderId).then(res => {
      // 支付成功则更新当前状态
      if (res.data.data.isPaid) orderStatus.value = OrderConstant.DONATION_ORDER_STATUS_FINISH
    })
    // 记录次数
    checkCount.value++;

  }
  // 开始轮询
  checkOrderInterval.value = setInterval(checkOrder, 2000);
}
// 被取消挂载时候
onUnmounted(()=>{
  // 关闭所有的定时器
  clearInterval(checkOrderInterval.value)
  clearInterval(qrLoadingInterval)
  clearInterval(checkOrderInterval.value)
  clearInterval(timeInterval.value)
})

</script>

<style lang="scss" scoped>
.donation-container {
  position: relative;
  overflow: hidden;
  width: 560px;
  padding: 20px 0;
  background-color: #fff;
  min-height: 200px;
  border-radius: 4px;
}

.qr {
  .qr-code {
    position: relative;
    overflow: hidden;
    border: 1px solid #eee;

    &.time-out {
      .time-out-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 230px;
        height: 230px;
      }

      &:before {
        content: '';
        opacity: .95;
        position: absolute;
        top: 0;
        left: 0;
        height: 230px;
        width: 230px;
        background-color: white;
      }
    }
  }
}

.qr-loading {
  width: 230px;
}
</style>
