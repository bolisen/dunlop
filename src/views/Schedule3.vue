<template>
  <div class="Schedule3">
    <div class="schedule3-img"
         @click="preview"
         @touchstart="startHandle"
         @touchmove="prevent"
         @touchend="endHandel"
    >
      <img src="../assets/img/meet4.png" class="schedule3-bgimg">
    <!--<div class="box" style="left:0" @click.stop="goSchedule5"></div>-->
    </div>
    <div>
      <img src="../assets/img/top.png" class="top-img">
    </div>
    <Back />
  </div>
</template>

<script>
import Back from "@/components/Back";
export default {
  name: "Schedule3",
  data() {
    return {};
  },
  components: {
    Back
  },
  created() {},
  mounted() {},
  methods: {
    startHandle(e) {
      this.touchstartY = e.changedTouches[0].clientY;
    },
    endHandel(e) {
      const touchendY = e.changedTouches[0].clientY;
      let temp = Math.abs(this.touchstartY - touchendY);
      if (temp > 20) this.goSchedule5();
    },
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    goSchedule5() {
      this.$router.push({
        name: "Schedule5"
      });
    },
    goSchedule6() {
      this.$router.push({
        name: "Schedule6"
      });
    },
    preview() {
      window.wx.previewImage({
        current: "http://pa-api.jiaxinxinyu.com/clear4.png", // 当前显示图片的http链接
        urls: ["http://pa-api.jiaxinxinyu.com/clear4.png"] // 需要预览的图片http链接列表
      });
    }
  },
  beforeDestroy() {}
};
</script>

<style scoped>
.Schedule3 {
  height: 100%;
}
.schedule3-img {
  position: relative;
  width: 750px;
  height: 1366px;
  /*background-image: url("../assets/img/meet4.png");
  background-size: 428px 904px*/
}
.schedule3-bgimg {
  width: 75%;
  height: 75%;
  padding-left:75px;
  padding-top: 80px;
}
.box {
  position: absolute;
  bottom: 0;
  width: 50vw;
  height: 100px;
}
.top-img {
  width: 50%;
  height: 50%;
  position: relative;
  left: 150px;
  bottom: 250px;
}
</style>
