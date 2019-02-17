<template>
  <div id="app">
    <navbar :userInfo='userInfo' ref='navbar' v-if="$store.state.blNav" @signIn="signIn" @ragister="ragister"></navbar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import footbar from '@/components/common/footbar.vue'
import register from './components/common/register.vue'
import login from './components/common/login.vue'
export default {
  name: 'App',
  data () {
    return {
      blLog: false,
      blReg: false,
      navArr: [],
      userInfo: {}
    }
  },
  beforeCreate () {
    // 登录
    this.postData({
      url: 'userinfo',
      success: (res) => {
        console.log(res)
        this.userInfo = res
      },
      fail: (error) => {
        throw error
      }
    })
  },
  mounted () {
    this.$refs.navbar.activeFn()
  },
  components: {
    navbar, footbar, register, login
  },
  methods: {
    signIn () {
      this.blLog = true
    },
    ragister () {
      this.blReg = true
    },
    closeHint () {
      this.blLog = false
      this.blReg = false
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
