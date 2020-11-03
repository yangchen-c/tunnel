 <template>
  <div class="phone">
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
        左洞事件预案
      </div>
      <div class="centerImg block" @click="dialogVisibleLb = true">
        开始喊话
      </div>
      <div class="rightImg block">右洞事件预案</div>
    </div>
    <div class="bot"></div>

    <!-- dialog -->
    <div class="zdia">
      <el-dialog :visible.sync="dialogVisible" width="40%" center>
        <div class="diaText">
          <img src="../../assets/images/phoneLeftT.png" alt="" />
          <span> 电话报警 </span>
          <img src="../../assets/images/phoneRightT.png" alt="" />
        </div>
        <div class="diaCon">
          <div class="dia1">当前 33 号电话呼叫</div>
          <div class="dia2">状态：呼叫中</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogVisible = false"
            >左洞事件预案</el-button
          >

          <el-button type="danger" @click="dialogVisible = false"
            >右洞事件预案</el-button
          >
        </span>
      </el-dialog>
    </div>

    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisibleLb" width="30%" center>
      <div class="diaText1">已选中2台设备，请开始录音</div>
      <div class="diaImg">
        <img src="../../assets/images/mike.png" alt="" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary">开始</el-button>

        <el-button type="primary" @click="dialogVisibleLb = false"
          >取消</el-button
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
      dialogVisibleLb: false,
    };
  },
  created() {},
  methods: {},
};
</script>

// 自定义组件样式
<style lang="less">
.phone {
  .zdia {
    .el-dialog {
      background-color: #0e161c;
      border: 0.01rem solid #f50101;
    }
    .el-button--danger {
      background-color: #f50101;
      border-color: #f50101;
    }
  }
  .el-dialog__header {
    padding: 0 !important;
  }
  .el-dialog {
    background-color: #0e161c;
    border: 0.01rem solid #1098fd;
  }
  .el-input {
    width: 20%;
  }
}
</style>



<style lang="less" scoped>
.phone {
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
      padding-left: 0.46rem;
      padding-top: 0.06rem;
      margin-left: 1.177rem;
      margin-top: 1.8rem;
    }
    .centerImg {
      cursor: pointer;
      width: 1.45rem;
      height: 0.21rem;
      background: url("../../assets/images/phone.png");
      background-size: 100% 100%;
      font-size: 0.16rem;
      padding-left: 0.38rem;
      padding-top: 0.03rem;
      margin-left: 1.83rem;
      // margin-top: 1.8rem;
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
      margin-left: 1.8rem;
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
    margin-bottom: 0.3rem;
  }

  .diaCon {
    font-size: 0.13rem;
    color: #fff;
    text-align: center;
    .dia2 {
      margin-top: 0.2rem;
    }
  }
  .diaText1 {
    font-size: 0.09rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
  .diaImg {
    width: 1.2rem;
    height: 0.58rem;
    margin-left: 0.78rem;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
