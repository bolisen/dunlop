<template>
  <div class="Schedule3">
    <div class="schedule3-img" @click="preview">
      <div class="box" style="left:0" @click.stop="goSchedule5"></div>
      <div class="box" style="right:0" @click.stop="goSchedule6"></div>
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
      console.log(2);
      window.wx.previewImage({
        current: "http://dlp.doorder.com/front/clear1.png", // 当前显示图片的http链接
        urls: ["http://dlp.doorder.com/front/clear1.png"] // 需要预览的图片http链接列表
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
  height: 1355px;
  background-image: url("../assets/img/meet1.png");
  background-size: 750px 1355px;
}
.box {
  position: absolute;
  bottom: 0;
  width: 50vw;
  height: 100px;
}
</style>
