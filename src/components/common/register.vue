<template>
  <div class="register" @click.self="close">
    <div class="infoBox">
      <dl class="title">
        <dt>注册</dt>
        <dd class="el-icon-close pointer" @click.self="close"></dd>
      </dl>
      <ul class="infoList">
        <li>用户名：</li>
        <li>
          <el-input placeholder="请输入姓名"></el-input>
        </li>
        <li>手机号：</li>
        <li>
          <el-input placeholder="请输入手机号"></el-input>
        </li>
        <li>密码：</li>
        <li>
          <el-input placeholder="请输入密码"></el-input>
        </li>
        <li>
          <div>
            <el-input placeholder="手机验证码"></el-input>
          </div>
          <div>
            <span>&nbsp;</span>
            <el-button type="primary">获取验证码</el-button>
          </div>
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
  .register {
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
        padding: 20px 0;
        overflow: hidden;
        li {
          height: 40px;
          margin-bottom: 10px;
          line-height: 40px;
          display: flex;
          display: -webkit-flex;
        }
        li:nth-child(2n + 1) {
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
