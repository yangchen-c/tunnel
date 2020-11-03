<template>
  <div class="traffic">
    <div class="mid">
      <!-- 左 -->
      <div class="left1 block">左洞车道检测数据</div>
      <div class="left2 block">
        <span> 当前车流量： <i>37</i> 辆</span>
        <span style="margin-left: 20px"> 平均车速： <i>80</i> KM</span>
      </div>
      <div class="left3 block">
        <span> 一车道占有率 <i>37</i> %</span>
        <span style="margin-left: 20px"> 二车道占有率 <i>80</i> %</span>
      </div>
      <!-- 右 -->
      <div class="right1 block">右洞车道检测数据</div>
      <div class="right2 block">
        <span> 当前车流量： <i>37</i> 辆</span>
        <span style="margin-left: 20px"> 平均车速： <i>80</i> KM</span>
      </div>
      <div class="right3 block">
        <span> 一车道占有率 <i>37</i> %</span>
        <span style="margin-left: 20px"> 二车道占有率 <i>80</i> %</span>
      </div>
      <!--  -->
      <div class="leftImg block" @click="dialogVisible = true">
        左洞诱导标控制
      </div>
      <div class="rightImg block" @click="dialogVisible2 = true">
        右洞诱导标控制
      </div>
    </div>
    <div class="bot"></div>

    <!-- dialog -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="diaText">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span> 左洞诱导标控制 </span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <div class="diaCon">
        <span>亮度:{{ value1 }} </span>
        <span>占空比:{{ value2 }} </span>
        <span>闪烁频率:{{ value3 }}次/分钟</span>
      </div>
      <div class="diaBot">
        <div class="diaBot1">
          <div>亮度</div>
          <el-slider v-model="value1" :step="10"> </el-slider>
        </div>
        <div class="diaBot1">
          <div>占空比</div>
          <el-slider v-model="value2" :step="1"> </el-slider>
        </div>
        <div class="diaBot1">
          <div>闪烁频率</div>
          <el-slider v-model="value3" :step="10"> </el-slider>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- dialog -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose2"
    >
      <div class="diaText">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span> 右洞诱导标控制 </span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <div class="diaCon">
        <span>亮度:{{ value11 }} </span>
        <span>占空比:{{ value22 }} </span>
        <span>闪烁频率:{{ value33 }}次/分钟</span>
      </div>
      <div class="diaBot">
        <div class="diaBot1">
          <div>亮度</div>
          <el-slider v-model="value11" :step="10"> </el-slider>
        </div>
        <div class="diaBot1">
          <div>占空比</div>
          <el-slider v-model="value22" :step="1"> </el-slider>
        </div>
        <div class="diaBot1">
          <div>闪烁频率</div>
          <el-slider v-model="value33" :step="10"> </el-slider>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false"
          >确 定</el-button
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
      dialogVisible2: false,
      value1: 10,
      value2: 5,
      value3: 30,
      value11: 20,
      value22: 10,
      value33: 60,
    };
  },
  created() {},
  methods: {
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
    handleClose2(done) {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
  },
};
</script>

// 自定义组件样式
<style lang="less">
.el-dialog__header {
  padding: 0 !important;
}

.el-dialog {
  background-color: #0e161c;
  border: 0.01rem solid #1098fd;
}
</style>

<style lang="less" scoped>
// @rem: 1920/100rem;
.traffic {
  height: calc(100vh - 0.75rem);
  position: relative;
  .mid {
    .block {
      display: inline-block;
    }
    i {
      color: #0f8deb;
    }
    .left1 {
      font-size: 0.12rem;
      position: absolute;
      top: 0.4rem;
      left: 3.4rem;
      font-weight: 700;
    }
    .left2 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.6rem;
      left: 2.6rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
    .left3 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.75rem;
      left: 2.46rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
    .right1 {
      font-size: 0.12rem;
      position: absolute;
      top: 0.4rem;
      left: 5.55rem;
      font-weight: 700;
    }
    .right2 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.6rem;
      left: 5.7rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
    .right3 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.75rem;
      left: 5.85rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
    .leftImg {
      cursor: pointer;
      width: 1.27rem;
      height: 0.25rem;
      background: url("../../assets/images/firstLeft.png");
      background-size: 100% 100%;
      font-size: 0.12rem;
      padding-left: 0.26rem;
      padding-top: 0.06rem;
      margin-left: 1.177rem;
      margin-top: 1.8rem;
    }
    .rightImg {
      cursor: pointer;
      width: 1.27rem;
      height: 0.25rem;
      background: url("../../assets/images/firstRight.png");
      background-size: 100% 100%;
      font-size: 0.12rem;
      padding-left: 0.07rem;
      padding-top: 0.06rem;
      margin-left: 5.14rem;
    }
  }
  .bot {
    position: absolute;
    bottom: 0;
    // position: fixed;
    width: 100%;
    height: 2.71rem;
    background: url("../../assets/images/suidao.png") no-repeat;
    background-size: 100% 100%;
  }
  .diaText {
    color: #fff;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .diaCon {
    color: #fff;
    font-size: 0.09rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    margin-top: 0.4rem;
    padding-left: 0.2rem;
    span {
      margin-right: 0.3rem;
    }
  }
  .diaBot {
    padding-left: 0.2rem;
    .diaBot1 {
      margin-top: 0.2rem;
      div {
        color: #fff;
        font-size: 0.09rem;
        margin-bottom: 0.05rem;
      }
    }
  }
}
</style>
