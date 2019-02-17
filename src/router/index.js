import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/home/home.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: resolve => require(['@/pages/user/user.vue'], resolve),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/clues',
      component: resolve => require(['@/pages/clues/clues.vue'], resolve),
      children: [
        {
          path: 'customer',
          name: 'customer',
          component: resolve => require(['@/pages/clues/customerClues.vue'], resolve),
          meta: {
            title: '线索管理-客户线索'
          }
        },
        {
          path: 'assignClues',
          name: 'assignClues',
          component: resolve => require(['@/pages/clues/assignClues.vue'], resolve),
          meta: {
            title: '线索管理-线索分配'
          }
        },
        {
          path: 'createClues',
          name: 'createClues',
          component: resolve => require(['../pages/clues/createClues.vue'], resolve),
          meta: {
            title: '线索管理-创建线索'
          }
        },
        {
          path: 'batchAdd',
          name: 'batchAdd',
          component: resolve => require(['../pages/clues/batchAdd.vue'], resolve),
          meta: {
            title: '线索管理-批量添加'
          }
        },
        {
          path: 'commitLog',
          name: 'commitLog',
          component: resolve => require(['../pages/clues/commitLog.vue'], resolve),
          meta: {
            title: '线索管理-递交日志'
          }
        },
        {
          path: '',
          redirect: 'customer'
        }
      ],
      meta: {
        title: '线索管理-客户线索'
      }
    },
    {
      path: '/sales',
      name: 'sales',
      component: resolve => require(['@/pages/sales/sales.vue'], resolve),
      meta: {
        title: '销售管理'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/pages/order/order.vue'], resolve),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: resolve => require(['@/pages/product/product.vue'], resolve),
      meta: {
        title: '产品管理'
      }
    },
    {
      path: '/channel',
      name: 'channel',
      component: resolve => require(['@/pages/channel/channel.vue'], resolve),
      meta: {
        title: '渠道管理'
      }
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: resolve => require(['@/pages/marketing/marketing.vue'], resolve),
      meta: {
        title: '营销费用'
      }
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: resolve => require(['@/pages/statistics/statistics.vue'], resolve),
      meta: {
        title: '数据统计'
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: resolve => require(['@/pages/setting/setting.vue'], resolve),
      meta: {
        title: '系统设置'
      }
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    }
  ]
})
