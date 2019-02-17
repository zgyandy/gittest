<template>
  <div class="clues layout">
    <!-- 面包屑 -->
    <clumbs :clumbArr="clumbArr"></clumbs>
    <router-view @changeClumb="changeClumb"></router-view>
  </div>
</template>

<script>
import clumbs from '@/components/common/crumbs.vue'
export default {
  data () {
    return {
      clumbArr: []// 面包屑导航
    }
  },
  mounted () {
    // 子导航
    this.$store.dispatch('SANNAV', [{path: '/clues/customer', name: '客户线索'}, {path: '/clues/assignClues', name: '线索分配'}, {path: '/clues/createClues', name: '创建线索'}, {path: '/clues/batchAdd', name: '批量添加'}, {path: '/clues/commitLog', name: '递交日志'}])
  },
  methods: {
    changeClumb (arr) {
      this.clumbArr = arr
    }
  },
  components: {
    clumbs
  }
}
</script>

<style lang="less">

</style>
