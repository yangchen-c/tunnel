<template>
  <div class="science">
    <div class="mid">
      <div class="left1">
        <img src="../../assets/images/fourLeftT.png" alt="" />
        <span>左洞VI/CO及风向数据</span>
      </div>
      <div class="imgL left2">1号VI值:0.000km-11号CO值:001. 4 ppm</div>
      <div class="imgL left3">2号VI值:o.o00km-12号CO值:00o.o ppm</div>
      <div class="imgL left4">正风速:00.2m/s反风速:0o.om/s</div>
      <div class="imgL left5">完度值:o113.8 cd/m2</div>

      <div class="right1">
        <span>左洞VI/CO及风向数据</span>
        <img src="../../assets/images/fourRightT.png" alt="" />
      </div>
      <div class="imgR right2">1号VI值:0.000km-11号CO值:001. 4 ppm</div>
      <div class="imgR right3">2号VI值:o.o00km-12号CO值:00o.o ppm</div>
      <div class="imgR right4">正风速:00.2m/s反风速:0o.om/s</div>
      <div class="imgR right5">完度值:o113.8 cd/m2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.science {
  height: calc(100vh - 0.75rem);
  position: relative;
  .block {
    display: inline-block;
  }
  .left1 {
    position: absolute;
    left: 1.74rem;
    top: 1.06rem;
    img {
      width: 0.35rem;
      display: inline-block;
      height: 0.21rem;
    }
    span {
      display: inline-block;
      width: 1.8rem;
      font-size: 0.15rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
    }
  }
  .right1 {
    position: absolute;
    left: 6.3rem;
    top: 1.06rem;
    img {
      width: 0.35rem;
      display: inline-block;
      height: 0.21rem;
      position: absolute;
      left: 1.53rem;
    }
    span {
      display: inline-block;
      width: 1.8rem;
      font-size: 0.15rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
    }
  }
  .imgL {
    width: 2.87rem;
    height: 0.43rem;
    background: url("../../assets/images/fourLeftB.png");
    background-size: 100% 100%;
    position: absolute;
    left: 1.13rem;
    padding-left: 0.51rem;
    padding-top: 0.21rem;
    font-size: 0.1rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
  .left2 {
    top: 1.36rem;
  }
  .left3 {
    top: 1.86rem;
  }
  .left4 {
    top: 2.36rem;
  }
  .left5 {
    top: 2.86rem;
  }
  .imgR {
    width: 2.87rem;
    height: 0.43rem;
    background: url("../../assets/images/fourRightB.png");
    background-size: 100% 100%;
    position: absolute;
    left: 6.07rem;
    padding-left: 0.1rem;
    padding-top: 0.21rem;
    font-size: 0.1rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
  .right2 {
    top: 1.36rem;
  }
  .right3 {
    top: 1.86rem;
  }
  .right4 {
    top: 2.36rem;
  }
  .right5 {
    top: 2.86rem;
  }
}
</style>
