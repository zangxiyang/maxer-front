<template>
  <div class="maxer-register-container">
    <div class="register-content maxer-container f-jc-c al-c">
      <div class="maxer-card-container animate__animated animate__fadeIn">
        <div class="header f-jc-c al-c none-select">
          <h2>LOGO</h2>
        </div>
        <div class="content">
          <el-form ref="registerForm"
                   :rules="rules"
                   :model="form"
                   label-width="55px" status-icon label-position="top">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="form.userName" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input v-model="form.passWord"
                        type="password"
                        placeholder="请输入密码"
                        show-password
                        clearable
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="rePassWord">
              <el-input v-model="form.rePassWord"
                        type="password"
                        placeholder="请再次输入密码"
                        show-password
                        clearable
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%;padding-top: 15px">
              <el-button type="primary" class="login-button" @click="register">注册</el-button>
              <div class="go-login f-jc-c al-c mt-10">
                <span class="mr-10">已有账户?</span>
                <router-link to="/login">去登录</router-link>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 注册界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/2/9
 * 版本: V1
 */
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Register",
  components: {},
  data() {
    const validateRePass = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== (this.form as any).passWord) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        userName: '',
        passWord: '',
        rePassWord: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        passWord: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ],
        rePassWord: [
          {validator: validateRePass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    register() {
      (this as any).$refs['registerForm'].validate((valid: boolean)=>{
        if (valid) alert("验证通过");
        else return false;
      });
    }
  },
  activated() {
    // 初始化表单
    (this as any).$refs['registerForm'].resetFields();
  }
})
</script>

<style lang="scss" scoped>
.maxer-register-container {
  position: relative;
  background: url("https://imgcdn.imsle.com/images/2021/02/09/wallhaven-q6jvjl.jpg") no-repeat center center;
  background-size: cover;
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=");
  }

  .register-content {
    height: 100%;

    .maxer-card-container {
      padding: 15px;
      border-radius: 10px;
      min-height: 250px;
      width: 400px;
      background-color: rgba(255, 255, 255, .8);

      .header {
        padding: 10px;
        padding-top: 0;
        color: #464646;
        letter-spacing: 1px;
      }

      .content {
        padding: 0 30px;

        ::v-deep {
          .el-form--label-top .el-form-item__label {
            padding: 0;
          }

          .el-input__inner {
            background-color: rgba(255, 255, 255, .8);
            line-height: 20px;
          }

          .el-form-item__error {
            color: #bd1b1b;
          }

          .el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus {
            border-color: #bd1b1b;
          }

          .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
            border-color: #369e7d;
          }

          .el-form-item.is-error .el-input__validateIcon {
            color: #bd1b1b;
          }

          .el-form-item.is-success .el-input__validateIcon {
            color: #369e7d;
          }

          .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap > .el-form-item__label:before {
            content: '';
          }

          .el-form-item {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        .go-login {
          line-height: 20px;
          a {
            color: #ac633b;
            border-bottom: 1px dashed #ac633b;
          }
        }

        .login-button {
          padding: 5px 40px;
          letter-spacing: 4px;
          width: 100%;
        }
      }
    }
  }
}
</style>