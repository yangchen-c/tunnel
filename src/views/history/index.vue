<template>
  <div class="history">
    <div class="fg">
      <img src="../../assets/images/fg.png" alt="" />
    </div>
    <div class="top">历史数据报表</div>
    <div class="tabTop">
      <div class="block">
        <span class="demonstration">报表日期 : </span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </div>
      <div class="search" @click="dialogVisible = true">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <div class="tab">
      <el-table :data="tableData" border max-height="700">
        <el-table-column align="center" prop="date" label="日期">
        </el-table-column>
        <el-table-column align="center" prop="name" label="时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="L3微波总车流量DEC"
        >
        </el-table-column>
        <el-table-column align="center" prop="r1" label="R1微波总车流量DEC">
        </el-table-column>
      </el-table>
    </div>
    <div class="right">
      <div class="right1">保存</div>
      <div class="icon">
        <i class="el-icon-download"></i>
      </div>
      <div class="right2">下载</div>
    </div>

    <!-- dialog -->
    <el-dialog title="" :visible.sync="dialogVisible" width="50%" center>
      <div class="diaText">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span> 报表历史查询 </span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <div class="hisTab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="报表属性" name="first">
            <div class="block1">
              <span class="demonstration">起始时间：</span>
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']"
              >
              </el-date-picker>
            </div>
            <div class="block2">
              <span>间隔时间：</span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="时间属性" name="second">2</el-tab-pane>
          <el-tab-pane label="变量选择" name="third">3</el-tab-pane>
        </el-tabs>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >保 存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
      value1: "",
      value2: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
          r1: "43.00",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

// 自定义组件样式
<style lang="less">
.history {
  .el-table {
    color: #ffffff;
  }
  .el-table thead {
    color: #ffffff;
  }

  // ----------------------------------------------------------------------------------------
  .el-table td,
  .el-table th.is-leaf,
  .el-table--border,
  .el-table--group {
    border-color: #1098fd;
  }
  .el-table--group::after,
  .el-table--border::after,
  .el-table::before {
    background-color: #1098fd;
  }
  .el-table--group,
  .el-table--border {
    // border-color: #1098FD;
    border: 0.01rem solid #1098fd;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #212e3e !important;
  }
  // -----------------------------------------------------------------------------------------
  .el-table tr {
    background-color: #0c192b;
  }
  .el-table th {
    background-color: #0c192b;
  }
  .el-table--medium th,
  .el-table--medium td {
    padding: 0.08rem 0;
  }

.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 1.5rem;
}
  // .el-date-picker__editor-wrap {
  //   .el-input {
  //     width: 100%;
  //   }
  // }
  .el-input__inner {
    background-color: #0c192b;
    border-color: #0c192b;
    font-size: 0.09rem;
  }
  // .el-date-editor.el-input,
  // .el-date-editor.el-input__inner {
  //   width: 1.2rem;
  // }



  // .histab {
  //   .el-date-editor.el-input,
  //   .el-date-editor.el-input__inner {
  //     width: 3rem !important;
  //   }
  // }



  // dia  tab样式
  // .hisTab {
  .el-tabs__active-bar {
    background-color: transparent !important;
  }
  .el-tabs__item {
    top: 0 !important;
  }
  .el-tabs__item.is-active {
    color: #1098fd !important;
  }
  // }
}
</style>


<style lang="less" scoped>
.history {
  height: calc(100vh - 0.75rem);
  position: relative;
  .fg {
    margin-left: 3rem;
    width: 4rem;
    height: 2rem;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top {
    position: absolute;
    width: 1.61rem;
    height: 0.21rem;
    background: url("../../assets/images/phone.png");
    background-size: 100% 100%;
    font-size: 0.16rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
    padding-left: 0.32rem;
    padding-top: 0.01rem;
    left: 3rem;
    top: 0.7rem;
  }
  .tabTop {
    position: absolute;
    width: 4.88rem;
    height: 0.31rem;
    border: 0.01rem solid #1098fd;
    position: absolute;
    top: 1rem;
    left: 1.13rem;
    background-color: #0c1a2e;
    z-index: 111;
    padding-top: 0.08rem;
    text-align: center;
    color: #ffffff;
    .block {
      span {
        font-size: 0.09rem;
      }
    }
    .search {
      position: absolute;
      font-size: 0.2rem;
      left: 4.5rem;
      top: 0.04rem;
    }
  }
  .tab {
    position: absolute;
    top: 0.8rem;
    display: inline-block;
    width: 7.14rem;
    height: 3.5rem;
    background: url("../../assets/images/daily.png");
    background-size: 100% 100%;
    padding: 0.5rem 1.13rem;
  }
  .right {
    display: inline-block;
    width: 1.45rem;
    height: 2.13rem;
    background: url("../../assets/images/daily1.png");
    background-size: 100% 100%;
    position: absolute;
    left: 7.72rem;
    top: 1rem;
    font-size: 0.13rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    .right1 {
      position: absolute;
      left: 0.6rem;
      top: 0.52rem;
      cursor: pointer;
    }
    .icon {
      position: absolute;
      left: 0.6rem;
      top: 1.43rem;
      width: 0.23rem;
      height: 0.23rem;
      font-size: 0.28rem;
    }
    .right2 {
      position: absolute;
      left: 0.6rem;
      top: 1.79rem;
      cursor: pointer;
    }
  }
  .diaText {
    color: #fff;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hisTab {
    margin-top: 0.2rem;
    .block1{
      margin-top: 0.2rem;
    }
    .block2{
      margin-top: 0.2rem;
    }
    span{
      font-size: 0.09rem;
    }
  }
}
</style>
