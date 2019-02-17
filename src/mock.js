// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('data', 'get', function () {
  return {
    'name': 'andy'
  }
})
Mock.mock('postTest', 'post', function () {
  return {
    'post': 'test'
  }
})
// 用户信息
Mock.mock('userinfo', 'post', {
  name: '@cname',
  img: '@dataImage(40x40,帅)',
  id: '@integer(1,9999)',
  address: '@region',
  phone: /^1(3|4|5|6|7|8|9)\d{9}/
})
// 客户线索
Mock.mock('customerClue', 'post', function () {
  return [{
    value: 'zhinan',
    label: '全部来源',
    children: [{
      value: 'shejiyuanze',
      label: '全部分类',
      children: [{
        value: 'yizhi',
        label: '全部明细'
      }, {
        value: 'fankui',
        label: '反馈'
      }, {
        value: 'xiaolv',
        label: '效率'
      }, {
        value: 'kekong',
        label: '可控'
      }]
    }, {
      value: 'daohang',
      label: '导航',
      children: [{
        value: 'cexiangdaohang',
        label: '侧向导航'
      }, {
        value: 'dingbudaohang',
        label: '顶部导航'
      }]
    }]
  }, {
    value: 'zujian',
    label: '全部部门',
    children: [{
      value: 'basic',
      label: '全部岗位',
      children: [{
        value: 'layout',
        label: '全部成员'
      }, {
        value: 'color',
        label: 'Color 色彩'
      }, {
        value: 'typography',
        label: 'Typography 字体'
      }, {
        value: 'icon',
        label: 'Icon 图标'
      }, {
        value: 'button',
        label: 'Button 按钮'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio 单选框'
      }, {
        value: 'checkbox',
        label: 'Checkbox 多选框'
      }, {
        value: 'input',
        label: 'Input 输入框'
      }, {
        value: 'input-number',
        label: 'InputNumber 计数器'
      }, {
        value: 'select',
        label: 'Select 选择器'
      }, {
        value: 'cascader',
        label: 'Cascader 级联选择器'
      }, {
        value: 'switch',
        label: 'Switch 开关'
      }, {
        value: 'slider',
        label: 'Slider 滑块'
      }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器'
      }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器'
      }, {
        value: 'upload',
        label: 'Upload 上传'
      }, {
        value: 'rate',
        label: 'Rate 评分'
      }, {
        value: 'form',
        label: 'Form 表单'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table 表格'
      }, {
        value: 'tag',
        label: 'Tag 标签'
      }, {
        value: 'progress',
        label: 'Progress 进度条'
      }, {
        value: 'tree',
        label: 'Tree 树形控件'
      }, {
        value: 'pagination',
        label: 'Pagination 分页'
      }, {
        value: 'badge',
        label: 'Badge 标记'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert 警告'
      }, {
        value: 'loading',
        label: 'Loading 加载'
      }, {
        value: 'message',
        label: 'Message 消息提示'
      }, {
        value: 'message-box',
        label: 'MessageBox 弹框'
      }, {
        value: 'notification',
        label: 'Notification 通知'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单'
      }, {
        value: 'tabs',
        label: 'Tabs 标签页'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑'
      }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单'
      }, {
        value: 'steps',
        label: 'Steps 步骤条'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
      }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
      }, {
        value: 'popover',
        label: 'Popover 弹出框'
      }, {
        value: 'card',
        label: 'Card 卡片'
      }, {
        value: 'carousel',
        label: 'Carousel 走马灯'
      }, {
        value: 'collapse',
        label: 'Collapse 折叠面板'
      }]
    }]
  }, {
    value: 'ziyuan',
    label: '资源',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'jiaohu',
      label: '组件交互文档'
    }]
  }]
})
Mock.mock('customerTable', 'post', function () {
  return [{
    date: '2016-05-02',
    name: Mock.Random.cname(),
    newClue: 480,
    newClueA: 12,
    newClueB: 12,
    newClueC: 12,
    newClueD: 12,
    Aclue: 48,
    Aeffective: 12,
    Adetermined: 12,
    Ainvalid: 12,
    AgiveUp: 12,
    Bclue: 48,
    Beffective: 12,
    Bdetermined: 12,
    Binvalid: 12,
    BgiveUp: 12,
    Cclue: 48,
    Ceffective: 12,
    Cdetermined: 12,
    Cinvalid: 12,
    CgiveUp: 12,
    Dclue: 48,
    Deffective: 12,
    Ddetermined: 12,
    Dinvalid: 12,
    DgiveUp: 12,
    department: '市场部/市场部主管',
    source: '网路流量/竞价/百度搜索',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: Mock.Random.cname(),
    newClue: 48,
    newClueA: 12,
    newClueB: 12,
    newClueC: 12,
    newClueD: 12,
    Aclue: 48,
    Aeffective: 12,
    Adetermined: 12,
    Ainvalid: 12,
    AgiveUp: 12,
    Bclue: 48,
    Beffective: 12,
    Bdetermined: 12,
    Binvalid: 12,
    BgiveUp: 12,
    Cclue: 48,
    Ceffective: 12,
    Cdetermined: 12,
    Cinvalid: 12,
    CgiveUp: 12,
    Dclue: 48,
    Deffective: 12,
    Ddetermined: 12,
    Dinvalid: 12,
    DgiveUp: 12,
    department: '市场部/市场部主管',
    source: '网路流量/竞价/百度搜索',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: Mock.Random.cname(),
    newClue: 48,
    newClueA: 12,
    newClueB: 12,
    newClueC: 12,
    newClueD: 12,
    Aclue: 48,
    Aeffective: 12,
    Adetermined: 12,
    Ainvalid: 12,
    AgiveUp: 12,
    Bclue: 48,
    Beffective: 12,
    Bdetermined: 12,
    Binvalid: 12,
    BgiveUp: 12,
    Cclue: 48,
    Ceffective: 12,
    Cdetermined: 12,
    Cinvalid: 12,
    CgiveUp: 12,
    Dclue: 48,
    Deffective: 12,
    Ddetermined: 12,
    Dinvalid: 12,
    DgiveUp: 12,
    department: '市场部/市场部主管',
    source: '网路流量/竞价/百度搜索',
    address: '上海市普陀区金沙江路 1519 弄'
  }]
})
var data = Mock.mock({
  'number|1-10': 202,
  'bl|1-1': true,
  'bl6|1': true,
  'obj|2': {name: 'xiaoming', age: 12, id: 12, adress: '上海'},
  'arr|1': [1, 2],
  regexp: /^1(3|4|5|6|7|8|9)\d{9}/,
  name: '@image(120x120,#f00,#333,jpg,ceshi)',
  text: '@paragraph(3)',
  cfirst: '@cfirst',
  clast: '@clast'
})
console.log(JSON.stringify(data))
console.log(Mock.toJSONSchema({'list|1-10': [{ceshi: 12}]}))
console.log(Mock.Random.first())
var template = {
  name: 'value1'
}
var data1 = {
  name: 'value2'
}

console.log(JSON.stringify(Mock.valid(template, data1)))
