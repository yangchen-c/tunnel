<template>
  <div id="app">
    <!-- ------------------------------------------------------------------------------------------------------ -->
    <div class="top">
      <!-- <div class="log">
        <img src="../../assets/images/sb.jpg" alt="" />
      </div> -->
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- <el-tab-pane class="logo" disabled></el-tab-pane> -->
          <el-tab-pane disabled>
            <span slot="label">
              <img src="../../assets/logo3.png" alt="" />
              <!-- <el-button @click="toggleFullscreen">默认按钮</el-button> -->
            </span>
          </el-tab-pane>
          <el-tab-pane label="交通诱导" name="first">
            <echone v-if="show"></echone>
          </el-tab-pane>
          <el-tab-pane label="照明系统" name="second">
            <echtwo v-if="show2"></echtwo>
          </el-tab-pane>
          <el-tab-pane label="通风系统" name="third">
            <echthree v-if="show3"></echthree>
          </el-tab-pane>
          <el-tab-pane label="环境数据" name="fourth">
            <echfour v-if="show4"></echfour>
          </el-tab-pane>
          <el-tab-pane label="视频监控" name="fifth">
            <echfive v-if="show5"></echfive>
          </el-tab-pane>
          <el-tab-pane label="水泵控制" name="sixth">
            <echsix v-if="show6"></echsix>
          </el-tab-pane>
          <el-tab-pane label="消防系统" name="seventh"
            ><echseven v-if="show7"></echseven
          ></el-tab-pane>
          <el-tab-pane label="电力数据" name="eighth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="电话数据" name="ninth">
            <echnine v-if="show9"></echnine>
          </el-tab-pane>
          <el-tab-pane label="车检日报表" name="tenth">
            <echtenth v-if="show10"></echtenth>
          </el-tab-pane>
          <el-tab-pane label="历史数据报表" name="eleventh">
            <echeleventh v-if="show11"></echeleventh>
          </el-tab-pane>
          <el-tab-pane disabled>
            <span slot="label">
              <!-- <img src="../../assets/logo2.png" alt="" /> -->
              <navbar></navbar>
            </span>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- <div class="user">
        <navbar />
      </div> -->
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import Navbar from "../layout/components/Navbar";
import echone from "@/views/traffic/index";
import echtwo from "@/views/light/index";
import echthree from "@/views/wind/index";
import echfour from "@/views/science/index";
import echfive from "@/views/video/index";
import echsix from "@/views/water/index";
import echseven from "@/views/fireControl/index";
import echnine from "@/views/phone/index";
import echtenth from "@/views/daily/index";
import echeleventh from "@/views/history/index";

export default {
  components: {
    Navbar,
    echone,
    echtwo,
    echthree,
    echfour,
    echfive,
    echsix,
    echseven,
    echnine,
    echtenth,
    echeleventh,
  },
  data() {
    return {
      activeName: "eleventh",
      show: "false",
      show2: "false",
      show3: "false",
      show4: "false",
      show5: "false",
      show6: "false",
      show7: "false",
      show9: "false",
      show10: "false",
      show11: "true",
    };
  },
  mounted() {},
  created() {
    // this.eleven()
    this.toggleFullscreen();
  },
  methods: {
    // eleven(){
    //   keydown.122;
    // },
    toggleFullscreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    handleClick(tab, event) {
      if (tab.name == "first") {
        this.show = true;
      } else {
        this.show = false;
      }
      if (tab.name == "second") {
        this.show2 = true;
      } else {
        this.show2 = false;
      }
      if (tab.name == "third") {
        this.show3 = true;
      } else {
        this.show3 = false;
      }
      if (tab.name == "fourth") {
        this.show4 = true;
      } else {
        this.show4 = false;
      }
      if (tab.name == "fifth") {
        this.show5 = true;
      } else {
        this.show5 = false;
      }
      if (tab.name == "sixth") {
        this.show6 = true;
      } else {
        this.show6 = false;
      }
      if (tab.name == "seventh") {
        this.show7 = true;
      } else {
        this.show7 = false;
      }
      if (tab.name == "ninth") {
        this.show9 = true;
      } else {
        this.show9 = false;
      }
      if (tab.name == "tenth") {
        this.show10 = true;
      } else {
        this.show10 = false;
      }
      if (tab.name == "eleventh") {
        this.show11 = true;
      } else {
        this.show11 = false;
      }
    },
  },
};
</script>
<style lang="less">
#app{
  // Tabs样式修改
  // @rem: 1920/100rem;
  // 取消下面的下划线
  .el-tabs__nav-wrap::after {
    background-color: transparent !important;
  }
  .el-tabs__active-bar {
    left: 0.71rem !important;
    bottom: 0.1rem !important;
  }
  // 选中字体
  .el-tabs__item.is-active {
    font-size: 0.094rem;
    // padding-top: 60px;
    // width: 200 / @rem;
    // height: 119px;
    // // background: url("../../assets/images/bImg.png") no-repeat;
    cursor: pointer;
    // color: skyblue;
    // padding-left: 30 / @rem !important;
    // padding-top: 60 / @rem !important;
    top: -0.2rem;
  }
  // 未选中字体
  .el-tabs__item {
    font-size: 0.094rem;
    // padding-top: 60px;
    // width: 200 / @rem;
    // height: 119px;
    // // background: url("../../assets/images/pImg.png") no-repeat;
    cursor: pointer;
    color: #787db8;
    // padding-left: 30 / @rem !important;
    // padding-top: 60 / @rem !important;
    top: -0.2rem;
    padding: 0 0.15rem;
  }
  .el-tab-pane {
    color: #ffffff !important;
  }
  #tab-0 {
    width: 0.46rem;
    height: 0.46rem;
    padding: 0;
    margin-left: 0.41rem;
    margin-top: 0.2rem;
    margin-right: 0.3rem;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #tab-12 {
    width: 0.46rem;
    height: 0.46rem;
    padding: 0;
    margin-left: 0.31rem;
    margin-top: 0.2rem;
    margin-right: 0.3rem;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="less" scoped>
// @rem: 1920/100rem;
#app {
  // padding-top: 30 / @rem;
  // padding-left: 60 / @rem;
  // width: 100vw;
  height: 100vh;
  background: url("../../assets/bgI.png");
  background-size: 100% 100%;
  .tabs {
  }
}
</style>
