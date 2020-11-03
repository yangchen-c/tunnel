<template>
  <div class="wind">
    <div class="mid">
      <!-- 左 -->
      <div class="left1 block">左洞VI/CO及风向数据</div>
      <div class="left2 block">
        <span> VI值: <i>0.0</i> km-l </span>
        <span style="margin-left: 20px"> CO值: <i>80</i> PPM</span>
        <span style="margin-left: 20px"> FS值: <i>0.0</i> m/s</span>
      </div>
      <div class="left3 block">
        <span> 光强： <i>0112.9</i> CD/M2</span>
      </div>
      <!-- 右 -->
      <div class="right1 block">右洞VI/CO及风向数据</div>
      <div class="right2 block">
        <span> VI值: <i>0.0</i> km-l </span>
        <span style="margin-left: 20px"> CO值: <i>80</i> PPM</span>
        <span style="margin-left: 20px"> FS值: <i>0.0</i> m/s</span>
      </div>
      <div class="right3 block">
        <span> 光强： <i>0112.9</i> CD/M2</span>
      </div>
      <!--  -->
    </div>
    <div class="bot"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
// @rem: 1920/100rem;
.wind {
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
      left: 3.2rem;
      font-weight: 700;
    }
    .left2 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.6rem;
      left: 2.3rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
    .left3 {
      font-size: 0.09rem;
      position: absolute;
      top: 0.75rem;
      left: 3.2rem;
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
}
</style>
