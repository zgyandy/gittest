<template>
  <div class="navbar">
    <div class="top">
      <ul class="layout header">
        <li class="logo">
          <p><img src="../../assets/img/logo.png" alt=""></p>
          <h3>海同科技CRM管理系统</h3>
        </li>
        <li class="search">
          <el-input
            placeholder="请输入客户名/手机号查询"
            v-model="search"
            suffix-icon="el-icon-search"
            size="medium"
          >
          <el-button slot="append">搜索</el-button>
          </el-input>
        </li>
        <li class="userMsg">
          <p>
            <span>您好：<em class="userName">{{userInfo.name}}</em><span>，欢迎登陆！上次登录时间：<em class="time">{{loginTime}}</em></span></span>
            <span class="loginOut">退出</span>
          </p>
          <dl>
            <dd><span>今日通话时长：<em class="callTime">{{callTime}}</em></span></dd>
            <dd><span>通话次数：<em class="callNum">{{callNum}}</em></span></dd>
            <dd><span><em class="el-icon-message"></em><em class="msgNum">{{msgNum}}</em>条未处理</span></dd>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <ul class="navList layout">
        <li :class="{'active': currentPath.indexOf(item.path) !== -1}" v-for="(item, key) in firArr" :key="key" name='item.path' @click.stop="activeFn">
          <router-link :to="item.path">
            <span>{{item.name}}</span>
            <em :class="{'el-icon-caret-bottom': currentPath.indexOf(item.path) !== -1, 'el-icon-caret-top': currentPath.indexOf(item.path) === -1}"></em>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 子导航 -->
    <ul class="navSan layout" v-if="$store.state.navArr.length > 1">
      <li :class="{'active': currentPath.indexOf(item.path) !== -1}" v-for="(item, key) in $store.state.navArr" :key="key" @click.stop="activeFn">
        <router-link :to="item.path"><span>{{item.name}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['userInfo'],
  data () {
    return {
      search: '',
      userName: '小明',
      loginTime: '2018-06-12 16:04:03',
      callTime: '00:00:00',
      callNum: 12,
      msgNum: 3,
      active: '',
      firArr: [
        {name: '首页', path: '/home'},
        {name: '线索管理', path: '/clues'},
        {name: '销售管理', path: '/sales'},
        {name: '订单管理', path: '/order'},
        {name: '渠道管理', path: '/channel'},
        {name: '营销费用', path: '/marketing'},
        {name: '产品管理', path: '/product'},
        {name: '数据统计', path: '/statistics'},
        {name: '系统设置', path: '/setting'}
      ],
      currentPath: sessionStorage.getItem('currentPath')
    }
  },
  methods: {
    activeFn () {
      this.currentPath = sessionStorage.getItem('currentPath')
    }
  }
}
</script>

<style lang="less">
  .navbar {
    min-height: 110 + 48px;
    min-width: 1200px;
    border-bottom: 4px solid #428adf;
    .active {
      color: #428adf;
    }
    .top {
      height: 110 - 50px;
      padding: 25px 0;
      background-color: #428adf;
      .header {
        height: 60px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        li {
          height: 60px;
          color: #fff;
          h3 {
            font-size: 20px;
          }
          h4 {
            font-size: 16px;
          }
        }
        .search {
          height: 40px;
          .el-input__inner {
            width: 320px;
            height: 40px;
          }
          .el-icon-search {
            font-size: 20px;
          }
        }
        .userMsg {
          min-width: 380px;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          flex-direction: column;
          p {
            height: 16px;
            line-height: 16px;
            .loginOut::before {
              content: '|';
              padding: 0 10px;
            }
          }
          dl {
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            align-items: center;
            .el-icon-message {
              font-size: 18px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .nav {
      height: 24px;
      padding: 12px 0;
      width: 100%;
      background-color: #e1e4e6;
      .navList {
        height: 24px;
        line-height: 24px;
        display: flex;
        display: -webkit-flex;
        li {
          width: 105px;
          text-align: center;
          font-size: 16px;
          border-right: 1px #ccc solid;
          cursor: pointer;
          a {
            color: inherit;
          }
        }
        li:first-child{
          width: 60px;
          text-align: left;
        }
        li:last-child {
          border: none;
        }
      }
    }
    .navSan {
      height: 48px;
      font-size: 16px;
      line-height: 48px;
      display: flex;
      display: -webkit-flex;
      li {
        width: 100px;
        text-align: center;
        a {
          color: inherit;
        }
      }
    }

  }
</style>
