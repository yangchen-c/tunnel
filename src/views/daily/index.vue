<template>
  <div class="daily">
    <div class="fg">
      <img src="../../assets/images/fg.png" alt="" />
    </div>
    <div class="top">车检日报表</div>
    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
    </el-date-picker>
    <div class="tab">
      <el-table :data="tableData" border max-height="700">
        <el-table-column align="center" prop="date" label="时间">
        </el-table-column>
        <el-table-column align="center" prop="name" label="左洞总车辆">
        </el-table-column>
        <el-table-column align="center" prop="address" label="右洞总车辆">
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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value1:'',
      tableData: [
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
        },
        {
          date: "2016-05-04",
          name: "66",
          address: "38",
        },
        {
          date: "2016-05-01",
          name: "66",
          address: "88",
        },
        {
          date: "2016-05-03",
          name: "66",
          address: "66",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
        },
        {
          date: "2016-05-04",
          name: "66",
          address: "38",
        },
        {
          date: "2016-05-01",
          name: "66",
          address: "88",
        },
        {
          date: "2016-05-03",
          name: "66",
          address: "66",
        },
        {
          date: "2016-05-02",
          name: "66",
          address: "36",
        },
        {
          date: "2016-05-04",
          name: "66",
          address: "38",
        },
        {
          date: "2016-05-01",
          name: "66",
          address: "88",
        },
        {
          date: "2016-05-03",
          name: "66",
          address: "66",
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
</style>

<style lang="less" scoped>
.daily {
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
    padding-left: 0.39rem;
    padding-top: 0.01rem;
    left: 3rem;
    top: 0.5rem;
  }
  .tab {
    position: absolute;

    top: 0.6rem;
    display: inline-block;
    width: 7.14rem;
    height: 3.5rem;
    background: url("../../assets/images/daily.png");
    background-size: 100% 100%;
    padding: 0.27rem 1.13rem;
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
}
</style>
