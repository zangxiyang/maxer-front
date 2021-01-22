<template>
  <img src="./assets/logo.png">
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
    <div class="flex jc-c">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
.flex{
  display: flex;
  a{
    margin-right: 10px;
  }
}
.flex.jc-c{
  justify-content: center;
}
.mr-10{
  margin-right: 10px;
}
</style>