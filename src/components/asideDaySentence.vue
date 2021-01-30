<template>
  <home-aside-container
      icon="iconbianxie"
      icon-size="30px"
      title="每日一言"
      class="aside-hitokoto"
  >
    <template v-slot:default>
      <div class="hitokoto">
        <p>{{ hitokoto.hitokoto }}</p>


        <template v-if="isSuccess">
          <p class="hitokoto-from f-jc-r al-c mt-10">
            <template v-if="hitokoto.from">
              <span class="line"></span>
              <span>《{{ hitokoto.from }}》</span>
              <span>{{ hitokoto.from_who }}</span>
            </template>
            <template v-else-if="hitokoto.from_who">
              <span class="line"></span>
              <span>{{ hitokoto.from_who }}</span>
            </template>
          </p>
        </template>
        <template v-else>
          <!--加载中-->
          <el-skeleton :rows="1" :loading="isLoading" animated>
            <template v-slot:default>
              <div class="aside-error">
                <div class="f-jc-c al-c">
                  <icon-font name="icondebug" right="5px"/>
                  <p>网络开了个小差，请稍后再试！</p>
                </div>
                <div class="f-jc-c">
                  <div class="maxer-border-button" @click="reloadHitokoto">
                    <icon-font name="iconicon" right="3px"/>
                    <span>重试一次</span>
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>

        </template>
      </div>
    </template>
  </home-aside-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HomeAsideContainer from "@/components/homeAsideContainer.vue";
import {Methods, request} from '@/utils/request'
import IconFont from "@/components/IconFont.vue";

interface Hitokoto {
  hitokoto: string;
  from: string;
  from_who: string;
}

export default defineComponent({
  name: "asideDaySentence",
  components: {IconFont, HomeAsideContainer},
  data() {
    return {
      hitokoto: {} as Hitokoto,
      isSuccess: false,
      isLoading: true
    }
  },
  created() {
    this.loadHitokoto();
  },
  methods: {
    // 加载一言
    loadHitokoto() {
      request('http://localhost:8080/api/proxy/hitokoto', Methods.GET).then(({data}) => {
        this.hitokoto = (data as any).data;
        this.isSuccess = true
      }).finally(() => {
        this.isLoading = false;
      })
    },
    reloadHitokoto() {
      this.isLoading = true
      request('http://localhost:8080/api/proxy/hitokoto', Methods.GET).then(({data}) => {
        this.hitokoto = (data as any).data;
        this.isSuccess = true
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.aside-hitokoto {
  min-height: 150px;
  user-select: none;
  -webkit-user-select: none;

  .hitokoto {
    user-select: text;
    padding: 5px 10px;
    letter-spacing: 1px;

    .hitokoto-from {
      flex-wrap: wrap;
      font-size: 14px;
      font-style: italic;
      color: #343a40;

      span {
        display: block;
        margin-right: 3px;
      }

      .line {
        display: inline-block;
        font-size: 14px;
        font-style: italic;
        height: 1px;
        width: 15px;
        background-color: #343a40;
      }
    }
  }

  .aside-error {
    font-size: 13px;
    color: #8e8787;
  }

  .maxer-border-button {
    margin-top: 30px;
    font-style: normal;
  }
}
</style>