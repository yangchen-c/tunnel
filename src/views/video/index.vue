<template>
  <div class="video">
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
      <!-- <div class="leftImg block">左洞诱导标控制</div>
      <div class="rightImg block">右洞诱导标控制</div> -->
    </div>
    <div class="bot">
      <div class="block" style="margin-left: 1.19rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
      <div class="block" style="margin-left: 0.35rem">
        <img src="../../assets/images/video.png" alt="" />
      </div>
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
// @rem: 1920/100rem;
.video {
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
    width: 100%;
    height: 2.71rem;
    background: url("../../assets/images/suidao.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 0.1rem;
    .block {
      display: inline-block;
    }
  }
}
</style>
