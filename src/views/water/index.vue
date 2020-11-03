<template>
  <div class="water">
    <div class="fg">
      <img src="../../assets/images/fg.png" alt="">
    </div>
    <div class="left">
      <dv-water-level-pond
        :config="config"
        style="width: 4.5rem; height: 2rem"
      />
    </div>
    <div class="right">
      <el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div>
      </el-popover>
      <el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div> </el-popover
      ><el-popover placement="left" trigger="hover">
        <div>
          <el-button class="btn">手动</el-button>
        </div>
        <div>
          <el-button class="btn">启用</el-button>
        </div>
        <div class="box" slot="reference">
          <div class="img"></div>
          <span>自动状态：<i>手动</i> </span>
          <span>运行状态：<i>停止</i></span>
          <span>当前压力：<i>100</i></span>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      config: {
        data: [88.88],
        waveNum: 5,
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less">
.el-popover {
  width: 1.13rem;
  height: 0.65rem;
  background: url("../../assets/images/water2.png");
  background-size: 100% 100%;
  border: 0;
  padding-left: 0.2rem;
}
.btn {
  width: 0.61rem;
  height: 0.18rem;
  display: inline-block;
  margin-top: 0.07rem;
  // margin-left: 0.06rem;
}
</style>


<style lang="less" scoped>
.water {
  height: calc(100vh - 0.75rem);
  position: relative;
  .fg{
    margin-left: 3rem;
    width: 4rem;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .left {
    position: absolute;
    top: 1.5rem;
    left: 0.5rem;
    display: inline-block;
  }
  .right {
    display: inline-block;
    // width: 4rem;
    position: absolute;
    left: 6.25rem;
    top: 1rem;
    .box {
      display: inline-block;
      width: 1.46rem;
      height: 0.64rem;
      border: 0.01rem solid #1098fd;
      margin-left: 0.16rem;
      margin-bottom: 0.16rem;
      position: relative;
      .img {
        display: inline-block;
        margin-left: 0.13rem;
        margin-top: 0.18rem;
        width: 0.36rem;
        height: 0.32rem;
        background: url("../../assets/images/water1.png");
        background-size: 100% 100%;
      }
      span {
        display: inline-block;
        position: absolute;
        font-size: 0.09rem;
        left: 0.6rem;
      }
      span:nth-of-type(1) {
        top: 0.1rem;
        i {
          color: #2db516;
        }
      }
      span:nth-of-type(2) {
        top: 0.25rem;
        i {
          color: #ff0000;
        }
      }
      span:nth-of-type(3) {
        top: 0.4rem;
        i {
          color: #2db516;
        }
      }
    }
  }
}
</style>
