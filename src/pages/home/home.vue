<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  mounted () {
    this.$store.dispatch('SANNAV', [])
  }
}
</script>

<style lang="less" scoped>
  .home {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url('../../assets/img/welcome.jpg') no-repeat center top;
    background-size: 100%;
  }
  textarea{
    line-height: 20px;
  }
</style>
