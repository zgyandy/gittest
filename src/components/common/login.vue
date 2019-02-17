<template>
  <div class="login" @click.self="close">
    <div class="infoBox">
      <dl class="title">
        <dd>登录</dd>
        <dd class="el-icon-close pointer" @click="close"></dd>
      </dl>
      <ul class="infoList">
        <li>手机号、邮箱</li>
        <li><input type="text" placeholder="用户名"></li>
        <li>密码</li>
        <li><input type="text" placeholder="密码" password></li>
        <li>
          <el-button class="pointer" type="success">登录</el-button>
        </li>
      </ul>
      <p class="agreement"><span>登录即表示你同意网站的<a href="">《服务条款》</a></span></p>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('closeHint')
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0, .6);
    .infoBox {
      width: 450px;
      background: #fff;
      position: relative;
      top: 50%;
      left: 50%;
      border-radius: 10px;
      overflow: hidden;
      transform: translate(-50%, -50%);
      -o-transform: translate(-50%, 50%);
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      .title {
        height: 50px;
        line-height: 50px;
        padding:0 12px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        background-color: #f3f3f3;
      }
      .infoList {
        width: 400px;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
        overflow: hidden;
        li {
          height: 40px;
          margin-bottom: 20px;
          line-height: 40px;
          input {
            height: 40px;
            width: 380px;
            border: 1px gray solid;
            font-size: 20px;
            text-indent: 10px;
            border-radius: 5px;
          }
          button {
            height: 40px;
            width: 100%;
            font-size: 16px;
          }
        }
        li:nth-child(2n+1) {
          margin-bottom: 0;
        }
      }
      .agreement {
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding-bottom: 20px;
        a {
          color: red;
        }
      }
    }
  }
</style>
