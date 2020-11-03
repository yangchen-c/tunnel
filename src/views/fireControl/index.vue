 <template>
  <div class="fireControl">
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
        左洞火警预案
      </div>
      <div class="rightImg block" @click="dialogVisible2 = true">
        右洞火警预案
      </div>
    </div>
    <div class="bot"></div>

    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <div class="diaText">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span> 左洞火警预案 </span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <el-form :model="form">
        <el-form-item label="预案名称" label-width="100px">
          <el-input v-model="form.name" placeholder="请输入预案名称"></el-input>
        </el-form-item>
        <el-form-item label="照明设备" label-width="100px">
          <el-input
            v-model="form.name1"
            suffix-icon="el-icon-arrow-right"
            ></el-input
          >
        </el-form-item>
        <el-form-item label="卷帘门" label-width="100px">
          <el-input
            v-model="form.name1"
            placeholder="已选择2个"
            suffix-icon="el-icon-arrow-right"
            ></el-input
          >
        </el-form-item>
        <el-form-item label="交通诱导" label-width="100px">
          <el-input
            v-model="form.name1"
            placeholder="已选择20个"
            suffix-icon="el-icon-arrow-right"
            ></el-input
          >
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >保 存</el-button
        >

        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisible2" width="80%">
      <div class="diaText">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span> 右洞火警预案 </span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <el-form :model="form">
        <el-form-item label="预案名称" label-width="100px">
          <el-input v-model="form.name" placeholder="请输入预案名称"></el-input>
        </el-form-item>
        <el-form-item label="照明设备" label-width="100px">
          <el-input
            v-model="form.name"
            placeholder="请输入预案名称"
            suffix-icon="el-icon-arrow-right"
          ></el-input>
        </el-form-item>
        <el-form-item label="卷帘门" label-width="100px">
          <el-input
            v-model="form.name"
            placeholder="请输入预案名称"
            suffix-icon="el-icon-arrow-right"
          ></el-input>
        </el-form-item>
        <el-form-item label="交通诱导" label-width="100px">
          <el-input
            v-model="form.name"
            placeholder="请输入预案名称"
            suffix-icon="el-icon-arrow-right"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false"
          >保 存</el-button
        >
        <el-button @click="dialogVisible2 = false">取 消</el-button>
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
      form: {
        name: "",
        name1: "已选择20个",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {},
  methods: {},
};
</script>

// 自定义组件样式
<style lang="less">

.fireControl{
  .el-dialog__header {
  padding: 0 !important;
}

.el-dialog {
  background-color: #0e161c;
  border: 0.01rem solid #1098fd;
}

.el-input {
  width: 20%;
  // width: 1rem;
}
}

</style>



<style lang="less" scoped>
.fireControl {
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
    margin-bottom: 0.3rem;
  }
}
</style>
