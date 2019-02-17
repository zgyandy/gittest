<template>
  <div class="crumbs">
    <ul class="crumbList">
      <li>当前位置：</li>
      <li v-for="(item, key) in clumbArr" :key="key" :class="{'active': !item.path}">
        <span v-if="key >= 1" class="el-icon-arrow-right" ></span>
        <router-link v-if="item.path" :to="item.path">{{item.name}}</router-link>
        <span v-if="!item.path">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['clumbArr']
}
</script>

<style lang="less" scoped>
  .crumbs {
    height: 54px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    .crumbList {
      height: 54px;
      line-height: 54px;
      text-align: center;
      display: flex;
      display: -webkit-flex;
      color: #8e8e8e;
      font-size: 14px;
      li {
        height: 54px;
        cursor: pointer;
        .el-icon-arrow-right {
          font-size: 12px;
        }
        a {
          color: inherit;
        }
      }
      .active {
        color: #428adf;
      }
    }
  }
</style>
