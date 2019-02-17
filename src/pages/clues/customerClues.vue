<template>
  <div class="customer content">
    <ul class="search">
      <li>
        <p class="time">
          <span>创建日期：</span>
          <el-date-picker
            v-model="date"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </p>
        <p>
          <span>渠道来源：</span>
            <el-cascader
              @change="dateFn"
              placeholder="请选择渠道来源"
              :options="options"
              filterable
              size="medium"
              v-model="source"
              change-on-select>
            </el-cascader>
        </p>
        <p>
          <span>责任人：</span>
            <el-cascader
              placeholder="请选择责任人"
              :options="options"
              filterable
              size="medium">
            </el-cascader>
        </p>
        <p>
          <el-button
          size="medium"
          type="primary"
          >确认</el-button>
        </p>
      </li>
    </ul>
    <p class="resultShow">
      <span>找到相关结果<em class="red">{{resultNum}}个，</em></span>
      <span v-for="(item, key) in date" :key="key"><em class="blue">{{item}}</em><span v-show="key === 0">&nbsp;至&nbsp;</span></span>
      <span>新线索<em class="red">12</em>个，</span>
      <span>有效单<em class="red">12</em>个，</span>
      <span>待定单<em class="red">12</em>个，</span>
      <span>无效单<em class="red">12</em>个，</span>
      <span>放弃单<em class="red">12</em>个。</span>
    </p>
    <div class="tableBox">
      <el-table :data="tabData" style="width: 1180px" border>
        <el-table-column prop="date" label="日期" sortable align="center" width="94"></el-table-column>
        <el-table-column label="新线索" align="center">
          <el-table-column prop="newClue" label="总量" width="32"></el-table-column>
          <el-table-column prop="newClueA" label="A" width="32"></el-table-column>
          <el-table-column prop="newClueB" label="B" width="32"></el-table-column>
          <el-table-column prop="newClueC" label="C" width="32"></el-table-column>
          <el-table-column prop="newClueD" label="D" width="32"></el-table-column>
        </el-table-column>
        <el-table-column label="A类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="B类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="C类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column label="D类" align="center">
          <el-table-column prop="Aclue" width="32" label="总量"></el-table-column>
          <el-table-column prop="Aeffective" width="32" label="有效"></el-table-column>
          <el-table-column prop="Adetermined" width="32" label="待定"></el-table-column>
          <el-table-column prop="Ainvalid" width="32" label="无效"></el-table-column>
          <el-table-column prop="AgiveUp" width="32" label="放弃"></el-table-column>
        </el-table-column>
        <el-table-column align="center" label="责任人" prop="name" width="70"></el-table-column>
        <el-table-column align="center" label="所在部门" prop="department" width="90">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="100" :content="scope.row.department">
              <div slot="reference" class="name-wrapper">{{ scope.row.department }}</div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column align="center" label="渠道来源" prop="source">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="160">
              <p>{{ scope.row.source }}</p>
              <div slot="reference" class="name-wrapper">{{ scope.row.source }}</div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pageResult">
        <el-pagination
          :background="true"
          :page-size="20"
          :total="tableData.length"
          layout="prev, pager, next, jumper"
          @current-change="fn"
        ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clumb: [{path: '/clues', name: '线索管理'}, {name: '客户线索'}],
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      date: '',
      options: [],
      resultNum: 12,
      tableData: [],
      source: [],
      num: 0,
      tabData: []
    }
  },
  methods: {
    dateFn () {
      console.log(this.source)
    },
    fn (n) {
      n = n || 1
      this.tabData = this.tableData.slice((n - 1) * 20, ((n - 1) * 20 + 20) > this.tableData.length ? this.tableData.length : (n - 1) * 20 + 20)
    }
  },
  beforeCreate () {
    this.postData({
      url: 'customerClue',
      success: (res) => {
        this.options = res
      },
      fail: (error) => {
        throw (error)
      }
    })
    this.postData({
      url: 'customerTable',
      success: (res) => {
        this.tableData = res
        // 调用分页方法
        this.fn()
        console.log(this.tableData)
      },
      fail: (error) => {
        throw error
      }
    })
  },
  mounted () {
    this.$emit('changeClumb', this.clumb)
  }
}
</script>

<style lang="less">
  .customer {
    .search {
      height: 36px;
      padding-bottom: 20px;
      border-bottom: 1px solid  #dddddd;
      font-size: 16px;
      li {
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        p.time {
          height: 36px;
          .el-icon-date {
            font-size: 16px;
          }
          .el-date-editor {
            height: 36px;
          }
        }
      }

    }
    .resultShow {
      height: 45px;
      padding-top: 14px;
      line-height: 28px;
      font-size: 14px;
    }
    .tableBox {
      box-sizing: border-box;
    }
    .pageResult {
      height: 36px;
      padding-top: 20px;
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
    }
  }
</style>
