<template>
  <div class="assignClues content">
    <!-- 搜索 -->
    <div class="search">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clumb: [{path: '/clues', name: '线索管理'}, {name: '线索分配'}],
      img: ''
    }
  },
  methods: {

  },
  mounted () {
    this.$emit('changeClumb', this.clumb)
    this.postData({
      url: 'userinfo',
      success: (res) => {
        console.log(res)
        this.img = res.img
      },
      fail: (error) => {
        throw error
      }
    })
  }
}
</script>

<style>

</style>
