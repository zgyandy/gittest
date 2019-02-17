// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import {Button, Select, Option, Radio, Input, InputNumber, Carousel, CarouselItem, DatePicker, TimePicker, Cascader, Table, TableColumn, Pagination, Popover, Tag, Checkbox, Slider} from 'element-ui'
import {getData, postData} from './config/base.js'
Vue.prototype.getData = getData
Vue.prototype.postData = postData

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Radio.name, Radio)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Cascader.name, Cascader)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(Popover.name, Popover)
Vue.component(Tag.name, Tag)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Slider.name, Slider)

require('./assets/iconfont/iconfont.css')
require('./assets/css/common.css')
// 判断是否是开发模式
if (process.env.NODE_ENV === 'development') {
  require('./mock.js')
}
Vue.config.productionTip = false
// 修改title值
router.beforeEach((to, from, next) => {
  sessionStorage.setItem('currentPath', to.path)
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '海同科技CRM管理系统'
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
