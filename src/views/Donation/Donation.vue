<template>
  <maxer-header title="☕️ 捐助本站" static/>
  <div class="maxer-container">
    <div class="info-box-container flex f-jc-c p-10">
      <div class="info-box">
        <el-card shadow="hover">
          <div class="top">谢谢，感谢您对本站的捐助</div>
          <div class="content mt-5">￥{{ amount }} <span class="unit">/期</span></div>
          <div class="bottom">
            <el-alert
                class="mt-5"
                title="成功捐助后，您将获得本站的特殊权益；"
                type="success" show-icon :closable="false"/>
          </div>
        </el-card>
        <div class="payment-group flex ">
          <payment-item
              class="mr-40"
              v-model="payment"
              is-icon
              icon-font-name="iconzhifu-zhifubao"
              value="alipay"
              title="支付宝"
              show-badge
              size="40"/>
          <payment-item
              v-model="payment"
              is-icon
              disabled
              icon-font-name="iconweixinzhifu1"
              value="wechat"
              size="30"
              title="微信支付"/>
        </div>
        <div class="form mt-20">
          <div class="item">
            <div class="item-title flex al-c">
              <span>
                <template v-if="donationMode === 0">
                  选择您的赞助期限
                </template>
                <template v-if="donationMode === 1">
                  选择您的赞助金额
                </template>
              </span>
              <maxer-button class="ml-10" @click="onButtonChangeMode">切换捐助模式</maxer-button>
            </div>
            <template v-if="donationMode=== 0">
              <!--正常模式-->
              <el-radio border v-model="count" :label="item.val" class="w-full p-relative mt-10"
                        v-for="item in countOptions" :key="item.title">
                <span>{{ item.title }}</span>
                <span class="final-money p-absolute">￥{{ item.val * amount }}</span>
              </el-radio>
            </template>
            <template v-if="donationMode === 1">
              <!--自定义金额捐助-->
              <el-input v-model="money" placeholder="请输入金额" class="mt-10" size="small" type="number">
                <template #prepend>
                  <icon-font name="iconcoin-yen" size="20"/>
                </template>
                <template #append>
                  元 / CNY / RMB
                </template>
              </el-input>
            </template>
          </div>
          <div class="item mt-20">
            <div class="item-title">捐助信息</div>
            <el-input class="mt-10" placeholder="您的名称(必填)" v-model="donateName" clearable maxlength="10"/>
            <el-input class="mt-10" placeholder="绑定手机号(唯一标识捐助者，所有捐助记录会与该手机号绑定，必填)" v-model="phone"/>
            <el-input class="mt-10" placeholder="捐助留言(选填)" v-model="msg" clearable maxlength="255" type="textarea"
                      :rows="7"
                      show-word-limit/>
          </div>
          <div class="item mt-20">
            <div class="item-title">您需要支付</div>
            <div class="money">
              <span>￥</span>
              <span class="amount">
                {{ money }}
              </span>
            </div>
            <div class="info">
              <p>1. 请确认支付金额以及赞助期数</p>
              <p>2. 赞助到期后并不会自动续费，如有需求请自行续费</p>
              <p>3. 赞助到期后部分权益会失效</p>
            </div>
          </div>
          <div class="item mt-20 mb-20">
            <el-button type="primary" @click="onPayButtonClick">去支付</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 名称: 捐助界面
 * 作者: Seale
 * 时间: 2021/11/11
 * 版本: V1
 */
import MaxerHeader from "@/components/MaxerHeader.vue";
import {ref, watch} from "vue";
import PaymentItem from "@/components/Donation/PaymentItem.vue";
import {useRouter} from "vue-router";
import {IDonationProps} from "@/views/Donation/IDonationProps";
import {Utils} from "@/utils/utils";
import {ElNotification} from "element-plus";
import MaxerButton from "@/components/MaxerButton.vue";
import IconFont from "@/components/IconFont.vue";

// 捐助模式 0-> 标准，通过item选择； 1-> 自定义，通过编辑框自己输入
const donationMode = ref<number>(1);

const amount = ref('5.00');
const payment = ref('alipay');
// 赞助期数
const count = ref(1);
// 需要支付金额
const money = ref<number>(count.value * Number(amount.value))
watch(count, () => {
  money.value = count.value * Number(amount.value)
})
// 监听捐助模式
watch(donationMode, value => {
  if (value === 0) {
    // 标准模式
    money.value = count.value * Number(amount.value)
  }
})
// 切换捐助模式
const onButtonChangeMode = () => {
  if (donationMode.value === 1) {
    donationMode.value = 0;
    return;
  }
  donationMode.value++;
}

const countOptions = [
  {
    title: '1期',
    val: 1
  },
  {
    title: '3期',
    val: 3
  },
  {
    title: '6期',
    val: 6
  },
  {
    title: '1年',
    val: 12
  }
];
// 捐助者
const donateName = ref<string>('');
// 捐助留言
const msg = ref<string>('');
// 手机号
const phone = ref<string>('');

const router = useRouter();
// 支付按钮点击事件
const onPayButtonClick = () => {
  // 检测手机号
  if (!(/^1[3456789]\d{9}$/.test(phone.value))){
    ElNotification({
      title: '出错啦',
      message: '请填写正确的手机号',
      type: 'error',
    })
    return false;
  }
  // 检测金额
  if (money.value <= 0 || money.value > 20000 || Utils.isEmpty(money.value)){
    ElNotification({
      title: '出错啦',
      message: '捐助金额不能大于20000元或不能为负数且不能为空',
      type: 'error',
    })
    return false;
  }
  if (Utils.isEmpty(donateName.value) ) {
    ElNotification({
      title: '出错啦',
      message: '捐助人属于必填项',
      type: 'error',
    })
    return false;
  }
  // 构建参数对象
  const params = {
    user: donateName.value,
    amount: String(money.value),
    msg: msg.value
  } as IDonationProps
  router.push({name: 'DonationResult', params})
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/maxer.variables";

.info-box {
  width: 560px;

  .top {
    font-size: 15px;
  }

  .content {
    font-size: 2rem;
    margin-left: -1px;

    .unit {
      font-size: 1.1rem;
      color: #8a8a8a;
    }
  }

  .final-money {
    right: 20px;
    color: #b0b0b0;
  }

  ::v-deep {
    .el-radio {
      background-color: #fff;
      border-radius: 0;
    }

    .el-radio.is-bordered + .el-radio.is-bordered {
      margin-left: 0;
    }
  }
}

.form {
  .item {
    .item-title {
      font-size: 1.2rem;
      color: #646464;
    }

    .money {
      font-size: 2rem;
      color: $maxer-normal-color;

      .amount {
        font-size: 2.6rem;
      }
    }

    .info {
      font-size: 13px;
      color: $maxer-grey-color;

      p {
        line-height: 20px;
      }
    }
  }
}


</style>
<style>
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
