import { createStore } from 'vuex'

export default createStore({
  state: {
    vuexIsLogin: false,        // 当前的登录状态
    vuexTestVar: "这是vuex全局混入的测试变量"
  },
  mutations: {
    $changeStore(state,payload){
      // 判断是否为多层级调用，state中为对象存在的情况，诸如user.info.name = '龚南柯'
      const nameArr = payload.name.split('.');
      const len = nameArr.length;
      if (len >= 2){
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        let obj = state[nameArr[0]];
        for (let i = 1 ; i < len - 1 ; i++){
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len-1]] = payload.value;

      }else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        state[payload.name] = payload.value;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
