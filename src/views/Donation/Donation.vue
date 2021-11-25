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
            <div class="item-title">选择您的赞助期限</div>
            <el-radio border v-model="count" :label="item.val" class="w-full p-relative mt-10"
                      v-for="item in countOptions" :key="item.title">
              <span>{{ item.title }}</span>
              <span class="final-money p-absolute">￥{{ item.val * amount }}</span>
            </el-radio>
          </div>
          <div class="item mt-20">
            <div class="item-title">捐助信息</div>
            <el-input class="mt-10" placeholder="您的名称(必填)" v-model="donateName" clearable maxlength="10"/>
            <el-input class="mt-10" placeholder="捐助留言(选填)" v-model="msg" clearable maxlength="255" type="textarea"
                      :rows="3"
                      show-word-limit/>
          </div>
          <div class="item mt-20">
            <div class="item-title">您需要支付</div>
            <div class="money">￥<span class="amount">{{ count * amount }}</span></div>
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
import {ref} from "vue";
import PaymentItem from "@/components/Donation/PaymentItem.vue";
import {useRouter} from "vue-router";
import {IDonationProps} from "@/views/Donation/IDonationProps";


const amount = ref('5.00');
const payment = ref('alipay');
// 赞助期数
const count = ref(1);
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
const donateName = ref();
// 捐助留言
const msg = ref();


const router = useRouter();
// 支付按钮点击事件
const onPayButtonClick = () => {
  const params = {
    user: donateName.value,
    amount: amount.value,
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
